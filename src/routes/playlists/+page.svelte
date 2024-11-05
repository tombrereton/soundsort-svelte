<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	let playlists = $state(data.playlists);
</script>

<h1 class="mb-4 text-2xl font-bold">Playlists</h1>

<ul class="space-y-4">
	{#each playlists as playlist}
		<li class="rounded-lg bg-white p-4 shadow-md transition hover:bg-gray-100">
			<h2 class="text-xl font-semibold">{playlist.name}</h2>
			<p class="text-gray-600"><strong>ID:</strong> {playlist.id}</p>
			<p class="text-gray-600">
				<strong>Created At:</strong>
				{new Date(playlist.created_at).toLocaleString()}
			</p>
			<p class="text-gray-600"><strong>Schedule:</strong> {playlist.schedule}</p>
		</li>
	{/each}
</ul>
