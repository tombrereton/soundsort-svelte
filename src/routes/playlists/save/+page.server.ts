import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ url }) => {
	const genre = url.searchParams.get('genre') || '';
	const bpm = url.searchParams.get('bpm') || '';
	const tracksParam = url.searchParams.get('tracks') || '[]';
	const tracks = JSON.parse(tracksParam);

	return {
		genre,
		bpm,
		tracks
	};
};

export const actions = {
	default: async ({ request, locals }) => {
		const session = await locals.auth();
		if (!session) {
			return fail(401, {
				error: 'Not authenticated with Spotify'
			});
		}
		const formData = await request.formData();
		const playlistName = formData.get('playlistName') as string;
		const schedule = formData.get('schedule') as string;
		const tracks = JSON.parse(formData.get('tracks') as string);
		const genre = formData.get('genre') as string;
		const bpm = formData.get('bpm') as string;

		try {
			const spotify = SpotifyApi.withAccessToken(env.AUTH_SPOTIFY_ID, session.token);
			const me = await spotify.currentUser.profile();

			const playlist = await spotify.playlists.createPlaylist(me.id, {
				name: playlistName,
				description: `Genre: ${genre}${bpm ? `, BPM: ${bpm}` : ''} - Created by SoundSort`,
				public: false
			});

			await spotify.playlists.addItemsToPlaylist(
				playlist.id,
				tracks.map((trackId: string) => `spotify:track:${trackId}`)
			);

			// If you're implementing scheduling, save it to your database here
			// if (schedule !== 'none') {
			// TODO: Implement scheduling logic
			// This would involve saving the schedule to your database
			// along with the playlist ID and other relevant information
			// }
		} catch (error) {
			if (error instanceof Response) throw error;
			console.error('Error creating playlist:', error);
			return fail(500, {
				error: 'Failed to create playlist',
				playlistName,
				schedule
			});
		}
		return redirect(303, `/playlists/success?id=${'asd'}`);
	}
} satisfies Actions;
