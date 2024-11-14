<script lang="ts">
	let {
		label,
		id,
		type = 'text',
		name,
		value,
		required = false,
		min = undefined,
		max = undefined
	} = $props<{
		label: string;
		id: string;
		type?: 'text' | 'number';
		name: string;
		value: string | number;
		required?: boolean;
		min?: string | number;
		max?: string | number;
	}>();
</script>

<div>
	<label for={id} class="block text-sm font-medium text-gray-700">
		{label}
	</label>
	<input
		{type}
		{id}
		{name}
		bind:value
		{required}
		{min}
		{max}
		class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
	/>
</div>
