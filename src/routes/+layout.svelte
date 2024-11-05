<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<footer>
		<p>Footer</p>
	</footer>
</div>
