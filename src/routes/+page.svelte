<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
</script>

<div>
	<button class="rounded border-2 border-black p-1" on:click={() => signIn()} aria-label="Sign In"
		>Sign In</button
	>
</div>
