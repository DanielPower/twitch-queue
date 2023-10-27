import { onMount } from 'svelte';

export const handledMessageIds = new Set<string>();

export const queues: Record<string, QueueItem[]> = {
	'95155565': [
		{
			user_id: '123',
			user_name: 'CrispyUmbrella',
			user_avatar:
				'https://static-cdn.jtvnw.net/jtv_user_pictures/42c11614-a892-4cc2-a3f8-850361586c47-profile_image-70x70.png',
			type: 'map',
			message: 'test'
		},
		{
			user_id: '123',
			user_name: 'NEET',
			user_avatar:
				'https://static-cdn.jtvnw.net/jtv_user_pictures/42c11614-a892-4cc2-a3f8-850361586c47-profile_image-70x70.png',
			type: 'skin',
			message: 'test'
		},
		{
			user_id: '123',
			user_name: 'Skey',
			user_avatar:
				'https://static-cdn.jtvnw.net/jtv_user_pictures/42c11614-a892-4cc2-a3f8-850361586c47-profile_image-70x70.png',
			type: 'replay',
			message: 'test'
		}
	]
};

export type ReviewType = 'map' | 'skin' | 'replay';

export type QueueItem = {
	user_id: string;
	user_name: string;
	user_avatar: string;
	type: ReviewType;
	message: string;
};

export const getQueue = async (): Promise<QueueItem[]> =>
	new Promise((resolve, reject) => {
		onMount(() => {
			window.Twitch.ext.onAuthorized((auth) => {
				fetch(`/api/queue/${auth.channelId}`).then((res) => {
					if (res.ok) {
						res.json().then((data) => {
							resolve(data);
						});
					} else {
						reject(res);
					}
				});
			});
		});
	});
