import type { PageServerLoad } from './$types';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { AUTH_SPOTIFY_ID, AUTH_SPOTIFY_SECRET } from '$env/static/private';
import type { PlaylistTrack } from '$lib/types';

export const load: PageServerLoad = async (events) => {
	const session = await events.locals.auth();
	const spotify = SpotifyApi.withClientCredentials(AUTH_SPOTIFY_ID, AUTH_SPOTIFY_SECRET);

	const url = events.url;
	const genre = url.searchParams.get('genre');
	const bpm = url.searchParams.get('bpm');

	try {
		const recommendations = await spotify.recommendations.get({
			seed_genres: [genre as string],
			target_tempo: bpm ? parseInt(bpm) : undefined,
			limit: 20
		});

		const tracks: PlaylistTrack[] = recommendations.tracks.map((track) => ({
			id: track.id,
			name: track.name,
			artists: track.artists.map((artist) => artist.name),
			albumName: track.album.name,
			// Get smallest suitable image or fallback
			albumImage: track.album.images[2]?.url || track.album.images[0]?.url || ''
		}));

		return {
			genre,
			bpm,
			tracks: tracks
		};
	} catch (error) {
		console.error('Error fetching recommendations:', error);
		return {
			genre,
			bpm,
			error: 'Failed to fetch recommendations',
			tracks: []
		};
	}
};
