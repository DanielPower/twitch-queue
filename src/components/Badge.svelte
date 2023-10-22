<script lang="ts">
	export let type: 'map' | 'skin' | 'replay';
	export let message: string;
</script>

<div class={`badge badge--${type}`}>
	{type}
</div>

<style>
	.badge {
		font-size: 0.75rem;
		display: inline-block;
		padding: 2px 5px;
		border-radius: 5px;
	}

	.badge--map {
		background-color: #3498db;
		color: #ffffff;
	}

	.badge--skin {
		background-color: #e67e22;
		color: #ffffff;
	}

	.badge--replay {
		background-color: #9b59b6;
		color: #ffffff;
	}
</style>
