<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import FormInput from '$lib/components/FormInput.svelte';
	let { form }: { form: ActionData } = $props();

	let isSubmitting = $state(false);

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

	<form
		method="POST"
		use:enhance={() => {
			isSubmitting = true;
		}}
		class="space-y-4"
	>
		{#each Object.entries(formInputs) as [key, input] (key)}
			<FormInput {...input} />
		{/each}

		<button
			type="submit"
			disabled={isSubmitting}
			class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-indigo-400"
		>
			{#if isSubmitting}
				<svg
					class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				Creating...
			{:else}
				Create Playlist
			{/if}
		</button>
	</form>
</div>
