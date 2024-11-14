<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import FormInput from '$lib/components/FormInput.svelte';
	let { form }: { form: ActionData } = $props();

	let formInputs = $state({
		genre: {
			label: 'Genre',
			id: 'genre',
			name: 'genre',
			value: '',
			required: true
		},
		bpm: {
			label: 'BPM (optional)',
			id: 'bpm',
			name: 'bpm',
			type: 'number' as const,
			value: '',
			min: 1,
			max: 300
		}
	});
</script>

<div class="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-lg">
	<h1 class="mb-6 text-2xl font-bold text-gray-800">Create Playlist</h1>

	{#if form?.error}
		<div class="mb-4 rounded-md bg-red-50 p-4">
			<p class="text-sm text-red-700">
				{form.error}
			</p>
		</div>
	{/if}

	<form method="POST" use:enhance class="space-y-4">
		<FormInput {...formInputs.genre} />
		<FormInput {...formInputs.bpm} />

		<button
			type="submit"
			class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>
			Create Playlist
		</button>
	</form>
</div>
