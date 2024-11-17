import type { Actions } from '@sveltejs/kit';
import type { PlaylistFormData } from '$lib/types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = {} as PlaylistFormData;

		const genre = formData.get('genre') as string;
		if (!genre) {
			return {
				success: false,
				error: 'Genre is required'
			};
		}
		data.genre = genre;

		const bpm = formData.get('bpm') as string | undefined;
		if (bpm && bpm !== '') {
			const bpmNumber = parseInt(bpm, 10);
			data.bpm = bpmNumber;
		}

		const happiness = formData.get('happiness') as string | undefined;
		if (happiness && happiness !== '') {
			const bpmNumber = parseInt(happiness, 10);
			data.happiness = bpmNumber;
		}

		try {
			const params = new URLSearchParams();
			params.append('genre', data.genre);
			if (data.bpm) {
				params.append('bpm', data.bpm.toString());
			}

			redirect(303, `/playlists/results?${params.toString()}`);
		} catch (error) {
			if (error instanceof Error) {
				console.error('Failed to create playlist:', error);
				return {
					success: false,
					error: 'Failed to create playlist'
				};
			}
			throw error;
		}
	}
} satisfies Actions;
