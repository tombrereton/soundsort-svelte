import type { PlaylistFormData } from '$lib/types';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const playlistData: PlaylistFormData = {
			genre: formData.get('genre') as string,
			bpm: Number(formData.get('bpm'))
		};

		if (!playlistData.genre) {
			return fail(400, { success: false, error: 'Must contain a genre' });
		}

		try {
			// Here you would typically save to a database
			console.log('Received playlist data:', playlistData);

			return {
				success: true,
				data: playlistData
			};
		} catch (error) {
			return {
				success: false,
				error: 'Failed to create playlist'
			};
		}
	}
} satisfies Actions;
