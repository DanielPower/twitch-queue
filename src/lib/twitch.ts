export const handledMessageIds = new Set<string>();

export type ReviewType = 'map' | 'skin' | 'replay';

export type QueueItem = {
	user_id: string;
	user_name: string;
	user_avatar: string;
	type: ReviewType;
	message: string;
};

export const queue: QueueItem[] = [
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
		user_name: 'test',
		user_avatar:
			'https://static-cdn.jtvnw.net/jtv_user_pictures/42c11614-a892-4cc2-a3f8-850361586c47-profile_image-70x70.png',
		type: 'skin',
		message: 'test'
	},
	{
		user_id: '123',
		user_name: 'test',
		user_avatar:
			'https://static-cdn.jtvnw.net/jtv_user_pictures/42c11614-a892-4cc2-a3f8-850361586c47-profile_image-70x70.png',
		type: 'replay',
		message: 'test'
	}
];
