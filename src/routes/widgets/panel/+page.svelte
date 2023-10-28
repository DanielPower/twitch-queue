<script lang="ts">
	import { getQueue } from '$lib/twitch';
	import { onMount } from 'svelte';
	import Review from '../../../components/Review.svelte';
	import { onContext } from '$lib/twitchExt';

	let theme = 'dark';

	onMount(() => {
		onContext((context) => {
			if (context.theme) {
				theme = context.theme;
			}
		});
	});
	const queuePromise = getQueue();
</script>

<div class={`panel ${theme}`}>
	{#await queuePromise}
		<h1>Review Queue (...)</h1>
		<p>Loading...</p>
	{:then queue}
		<h1>Review Queue ({queue.length})</h1>
		{#if queue.length === 0}
			<p>The queue is empty</p>
		{:else}
			{#each queue as item}
				<Review queueItem={item} />
			{/each}
		{/if}
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}
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
