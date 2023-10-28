<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#if data.errorMessage}
	<h1>Authentication error</h1>
	<p>{data.errorMessage}</p>
{/if}
{#if data.success}
	<h1>Successfully authenticated</h1>
	<p>You can close this window.</p>
{/if}

<style>
	:global(body) {
		margin: 1rem;
	}
</style>
