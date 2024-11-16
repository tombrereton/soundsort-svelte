<script lang="ts">
	const { size = 'h-12 w-12' } = $props();
</script>

<div class="flex h-64 items-center justify-center">
	<div class="{size} animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
</div>
