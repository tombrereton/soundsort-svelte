<script lang="ts">
	import type { PageData } from './$types';
	let { data } = $props<{ data: PageData }>();
	import { goto } from '$app/navigation';
	import type { PlaylistTrack } from '$lib/types';

	function handleSavePlaylist() {
		const searchParams = new URLSearchParams({
			genre: data.genre,
			tracks: JSON.stringify(data.tracks.map((track: PlaylistTrack) => track.id))
		});
		if (data.bpm) {
			searchParams.append('bpm', data.bpm);
		}
		goto(`/playlists/save?${searchParams.toString()}`);
	}
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
			<button
				onclick={handleSavePlaylist}
				class="bg-spotify-green hover:bg-spotify-green-dark rounded-full px-6 py-3 font-semibold text-white transition-colors"
			>
				Save to Spotify
			</button>
			{#each data.tracks as track}
				<div class="flex items-center gap-4 rounded-lg bg-gray-50 p-4 shadow">
					<img
						src={track.albumImage}
						alt={`${track.albumName} cover`}
						class="h-12 w-12 rounded-md object-cover shadow-sm"
					/>
					<div>
						<h3 class="font-semibold text-gray-800">{track.name}</h3>
						<p class="text-sm text-gray-600">
							{track.artists.join(', ')}
						</p>
						<p class="text-xs text-gray-500">{track.albumName}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
