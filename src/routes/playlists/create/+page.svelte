<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PlaylistFormData } from '$lib/types';

	let formData: PlaylistFormData = {
		genre: '',
		bpm: ''
	};
</script>

<div class="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-lg">
	<h1 class="mb-6 text-2xl font-bold text-gray-800">Create Playlist</h1>

	<form method="POST" use:enhance class="space-y-4">
		<div>
			<label for="genre" class="block text-sm font-medium text-gray-700"> Genre </label>
			<input
				type="text"
				id="genre"
				name="genre"
				bind:value={formData.genre}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
				required
			/>
		</div>

		<div>
			<label for="bpm" class="block text-sm font-medium text-gray-700"> BPM </label>
			<input
				type="number"
				id="bpm"
				name="bpm"
				bind:value={formData.bpm}
				min="1"
				max="300"
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
			/>
		</div>

		<button
			type="submit"
			class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			Create Playlist
		</button>
	</form>
</div>
