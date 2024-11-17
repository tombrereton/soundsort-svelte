import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = (async ({ url }) => {
	const playlistId = url.searchParams.get('id');
	console.log('playlistId', playlistId);

	if (!playlistId) {
		redirect(303, '/playlists');
	}

	return {
		playlistId
	};
}) satisfies PageLoad;
