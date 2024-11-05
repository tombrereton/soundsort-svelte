<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<p>{data.session?.user.name}</p>
<img class="aspect-square h-10 rounded-full" src={data.session?.user.image} alt="user profile" />
