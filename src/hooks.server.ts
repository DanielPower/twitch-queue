// subscribe to twitch eventsub
// fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Client-ID': import.meta.env.TWITCH_CLIENT_ID,
// 		Authorization: `Bearer ${import.meta.env.TWITCH_ACCESS_TOKEN}`
// 	},
// 	body: JSON.stringify({
// 		type: 'channel.follow',
// 		version: '1',
// 		condition: {
// 			broadcaster_user_id: import.meta.env.TWITCH_USER_ID
// 		},
// 		transport: {
// 			method: 'webhook',
// 			callback: '', // Oh wait, I need a public facing url for this
// 			secret: import.meta.env.TWITCH_SECRET
// 		}
// 	})
// })
// 	.then((res) => res.json())
// 	.then((json) => console.log(json));
