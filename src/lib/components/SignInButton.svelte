<script lang="ts">
	import type { Session } from '@auth/sveltekit';
	import { signIn, signOut } from '@auth/sveltekit/client';
	const { session }: { session: Session | null } = $props();
</script>

{#if session}
	<button class="rounded border-2 border-black p-1" onclick={() => signOut()} aria-label="Sign Out">
		Sign Out
	</button>
{/if}

{#if !session}
	<button class="rounded border-2 border-black p-1" onclick={() => signIn()} aria-label="Sign In">
		Sign In
	</button>
{/if}
