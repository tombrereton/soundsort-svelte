<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-lg">
	<h1 class="mb-6 text-2xl font-bold text-gray-800">Playlist Results</h1>
	<div class="text-gray-600">
		<p>Genre: {data.genre}</p>
		{#if data.bpm}
			<p>BPM: {data.bpm}</p>
		{/if}
	</div>

	{#if data.error}
		<div class="mt-4 rounded-md bg-red-50 p-4">
			<p class="text-red-700">{data.error}</p>
		</div>
	{:else}
		<div class="mt-6 space-y-4">
			{#each data.tracks as track}
				<div class="flex items-center gap-4 rounded-lg bg-gray-50 p-4 shadow">
					<img
						src={track.album.images[2]?.url}
						alt={`${track.album.name} cover`}
						class="h-12 w-12 rounded-md object-cover shadow-sm"
					/>
					<div>
						<h3 class="font-semibold text-gray-800">{track.name}</h3>
						<p class="text-sm text-gray-600">{track.artists.map((a) => a.name).join(', ')}</p>
						<p class="text-xs text-gray-500">{track.album.name}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
