<script lang="ts">
	import type { QueueItem } from '$lib/twitch';
	import Badge from './Badge.svelte';

	export let queueItem: QueueItem;
</script>

<div class="queue-item">
	<div class="queue-item__image">
		<img src={queueItem.user_avatar} alt={queueItem.user_name} />
	</div>
	<div class="queue-item__info">
		<h2>{queueItem.user_name}</h2>
		<div class="row">
			<Badge type={queueItem.type} />
			<p>{queueItem.message}</p>
		</div>
	</div>
</div>

<style>
	.row {
		display: flex;
		gap: 0.25rem;
		align-items: center;
	}
	.queue-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	.queue-item__image {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 10px;
	}

	.queue-item__image img {
		width: 100%;
		height: 100%;
	}

	.queue-item__info {
		flex-grow: 1;
	}

	.queue-item__info h2 {
		margin: 0;
		font-size: 1rem;
	}

	.queue-item__info p {
		margin: 0;
	}
</style>
