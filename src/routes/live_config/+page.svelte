<script lang="ts">
	import { onMount } from 'svelte';
	import Review from '../../components/Review.svelte';
	import { getQueue } from '$lib/twitch';

	let theme = 'dark';

	onMount(() => {
		window.Twitch.ext.onContext((context, _changed) => {
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
	<span>
		<input /><button>Add</button>
	</span>
</div>

<style>
	.panel {
		flex-grow: 1;
	}

	.dark {
		color: #e5e3e8;
	}

	.light {
		color: #201c2b;
	}
</style>
