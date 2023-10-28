<script>
	import { PUBLIC_SERVER_URL, PUBLIC_APP_CLIENT_ID } from '$env/static/public';
	import { onContext } from '$lib/twitchExt';
	import { onMount } from 'svelte';
	const scopes = ['channel:read:redemptions'].join('+');
	const url = encodeURI(
		'https://id.twitch.tv/oauth2/authorize?' +
			[
				`response_type=code`,
				`client_id=${PUBLIC_APP_CLIENT_ID}`,
				`redirect_uri=${PUBLIC_SERVER_URL}/api/oauth`,
				'response_type=token',
				`scope=${scopes}`
			].join('&')
	);

	const openAuthorizationWindow = () => {
		const width = 500;
		const height = 800;
		window.open(url, 'Grant Access', `width=${width},height=${height}`);
	};

	let theme = 'dark';

	onMount(() => {
		onContext((context, _changed) => {
			if (context.theme) {
				theme = context.theme;
			}
		});
	});
</script>

<div class={theme}>
	<button on:click={openAuthorizationWindow}>Authorize</button>
</div>

<style>
	.dark {
		color: #e5e3e8;
	}

	.light {
		color: #201c2b;
	}
</style>
