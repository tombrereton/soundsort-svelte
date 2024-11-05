<script>
	import logo from '$lib/images/logo.svg';
</script>

<header class="m-2 flex justify-between">
	<a href="/">
		<img src={logo} class="h-8 w-auto" alt="Soundsort" />
	</a>

	<nav class="flex gap-6">
		<a href="/">Home</a>
		<a href="/playlists">Dashboard</a>
		<a href="/playlists/create">Create Playlist</a>
		<a href="/playlists/results">Results</a>
	</nav>
</header>
