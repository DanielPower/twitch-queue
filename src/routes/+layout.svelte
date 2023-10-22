<slot />

<style>
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
		margin: 0;
		min-height: 100vh;
		font-family: sans-serif;
	}
	:global(h1) {
		margin: 0;
		font-size: 1.5rem;
	}
</style>
