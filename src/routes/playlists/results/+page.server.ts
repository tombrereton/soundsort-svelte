import type { PageServerLoad } from './$types';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { AUTH_SPOTIFY_ID, AUTH_SPOTIFY_SECRET } from '$env/static/private';

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

		return {
			genre,
			bpm,
			tracks: recommendations.tracks
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
