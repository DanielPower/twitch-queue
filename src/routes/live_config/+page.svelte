<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Review from '../../components/Review.svelte';
	export let data: PageData;
	let theme = 'dark';

	onMount(() => {
		window.Twitch.ext.onContext((context, _changed) => {
			if (context.theme) {
				theme = context.theme;
			}
		});
	});
</script>

<div class={`panel ${theme}`}>
	<h1>Review Queue ({data.queue.length})</h1>
	{#if data.queue.length === 0}
		<p>The queue is empty</p>
	{:else}
		{#each data.queue as item}
			<Review queueItem={item} />
		{/each}
	{/if}
</div>
<span>
	<input /><button>Add</button>
</span>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
		margin: 0;
		min-height: 100vh;
	}

	.panel {
		flex-grow: 1;
	}

	.dark {
		color: #e5e3e8;
	}

	.light {
		color: #201c2b;
	}

	h1 {
		margin: 0;
		font-size: 1.5rem;
	}
</style>
