<script lang="ts">
	import type { PageData } from './$types';
	let { data } = $props<{ data: PageData }>();
</script>

<div class="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 text-center shadow-lg">
	<h1 class="mb-6 text-2xl font-bold text-gray-800">Playlist Created!</h1>
	<p class="mb-6 text-gray-600">Your playlist has been successfully created on Spotify.</p>

	<div class="space-x-4">
		<a
			href={`spotify:playlist:${data.playlistId}`}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-block rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600"
		>
			Open in Spotify
		</a>

		<a
			href="/playlists/create"
			class="inline-block rounded-full bg-gray-200 px-6 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-300"
		>
			Create Another
		</a>
	</div>
</div>
