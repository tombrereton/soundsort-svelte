import type { Actions } from '@sveltejs/kit';
import type { PlaylistFormData } from '$lib/types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = {} as PlaylistFormData;
		const genre = formData.get('genre') as string;
		const bpm = formData.get('bpm') as string | undefined;

		if (!genre) {
			return {
				success: false,
				error: 'Genre is required'
			};
		}
		data.genre = genre;

		if (bpm && bpm !== '') {
			const bpmNumber = parseInt(bpm, 10);
			data.bpm = bpmNumber;
		}

		try {
			console.log('Playlist data to save:', data);

			return {
				success: true,
				data
			};
		} catch (error) {
			console.error('Failed to create playlist:', error);
			return {
				success: false,
				error: 'Failed to create playlist'
			};
		}
	}
} satisfies Actions;
