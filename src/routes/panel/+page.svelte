<script lang="ts">
	import Review from '../../components/Review.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	import { onMount } from 'svelte';

	let theme = 'dark';
	onMount(() => {
		window.Twitch.ext.onContext((context, _changed) => {
			if (context.theme) {
				console.log(context);
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

<style>
	.panel {
		padding: 10px;
		flex-grow: 1;
	}

	.dark {
		color: #e5e3e8;
		background-color: #201c2b;
	}

	.light {
		color: #201c2b;
		background-color: #e5e3e8;
	}
</style>
