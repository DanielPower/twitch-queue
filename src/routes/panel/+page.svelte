<script lang="ts">
	let theme = 'dark';
	window.Twitch.ext.onContext((context, _changed) => {
		if (context.theme) {
			theme = context.theme;
		}
	});
</script>

<div class={`panel ${theme}`}>
	<h1>Review Queue</h1>
	<ol>
		<li>CrispyUmbrella</li>
	</ol>
</div>

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0;
	}

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

	h1 {
		margin: 0;
		font-size: 1.5rem;
	}

	ol,
	li {
		margin: 0;
	}
</style>
