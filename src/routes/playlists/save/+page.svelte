<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let { data } = $props<{ data: PageData }>();
	let playlistName = $state('');
	let schedule = $state('none'); // 'none', 'daily', 'weekly'
</script>

<div class="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-lg">
	<h1 class="mb-6 text-2xl font-bold text-gray-800">Save Playlist</h1>

	<form method="POST" class="space-y-6">
		<div>
			<label for="playlistName" class="block text-sm font-medium text-gray-700">
				Playlist Name
			</label>
			<input
				type="text"
				id="playlistName"
				name="playlistName"
				bind:value={playlistName}
				required
				class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
			/>
		</div>

		<div>
			<label for="schedule" class="block text-sm font-medium text-gray-700">
				Refresh Schedule
			</label>
			<select
				id="schedule"
				name="schedule"
				bind:value={schedule}
				class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
			>
				<option value="none">No automatic refresh</option>
				<option value="daily">Daily</option>
				<option value="weekly">Weekly</option>
			</select>
		</div>

		<!-- Hidden inputs to pass along the track data -->
		<input type="hidden" name="tracks" value={JSON.stringify(data.tracks)} />
		<input type="hidden" name="genre" value={data.genre} />
		{#if data.bpm}
			<input type="hidden" name="bpm" value={data.bpm} />
		{/if}

		<div class="flex justify-end">
			<button
				type="submit"
				class="rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-600"
			>
				Create Playlist
			</button>
		</div>
	</form>
</div>
