import { queues } from '$lib/twitch';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params }) => {
	if (!queues[params.channel]) {
		return new Response('Not found', { status: 404 });
	}
	return new Response(JSON.stringify(queues[params.channel]));
};
