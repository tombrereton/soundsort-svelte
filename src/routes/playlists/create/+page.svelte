<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import FormInput, { type FormInputProps } from '$lib/components/FormInput.svelte';
	import SmallSpinner from '$lib/components/SmallSpinner.svelte';
	let { form }: { form: ActionData } = $props();

	let isSubmitting = $state(false);

	let formInputs = $state<Record<string, FormInputProps>>({
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
			type: 'number',
			value: '',
			min: 1,
			max: 300
		},
		happiness: {
			label: 'Happiness (optional)',
			id: 'happiness',
			name: 'happiness',
			type: 'number',
			value: '',
			min: 1,
			max: 100
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
				<SmallSpinner />
				Creating...
			{:else}
				Create Playlist
			{/if}
		</button>
	</form>
</div>
