import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	console.log('foo');
	return new Response('OK');
};

export const POST: RequestHandler = async ({ request }) => {
	console.log(await request.json());
	return new Response('OK');
};
