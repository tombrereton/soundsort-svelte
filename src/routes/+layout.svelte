<script lang="ts">
	import type { PageData } from './$types';
	import type { Snippet } from 'svelte';
	import logo from '$lib/images/logo.svg';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import '../app.css';
	let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<div class="app flex min-h-screen flex-col">
	<header class="flex items-center justify-between border-b-2 p-2">
		<a href="/">
			<img src={logo} class="h-8 w-auto" alt="Soundsort" />
		</a>

		<nav class="flex items-center gap-6">
			<a href="/">Home</a>
			<a href="/playlists">Dashboard</a>
			<a href="/playlists/create">Create Playlist</a>
			<a href="/playlists/results">Results</a>

			{#if data.session}
				<img
					class="h-10 w-10 rounded-full object-cover"
					src={data.session?.user.image}
					alt="user profile"
				/>
			{/if}

			{#if data.session}
				<button
					class="rounded border-2 border-black p-1"
					onclick={() => signOut()}
					aria-label="Sign Out"
				>
					Sign Out
				</button>
			{/if}

			{#if !data.session}
				<button
					class="rounded border-2 border-black p-1"
					onclick={() => signIn()}
					aria-label="Sign In"
				>
					Sign In
				</button>
			{/if}
		</nav>
	</header>
	<main class="flex-grow">
		{@render children()}
	</main>
	<footer class="border-t-2 p-2">
		<p>Footer</p>
	</footer>
</div>
