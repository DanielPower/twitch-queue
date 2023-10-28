import { APP_CLIENT_SECRET } from '$env/static/private';
import { PUBLIC_APP_CLIENT_ID } from '$env/static/public';
import { db } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	// TODO Get Zod, because this is a mess
	const code = url.searchParams.get('code');
	if (!code) {
		return { errorMessage: 'fuck' };
	}
	const tokenResponse = await fetch('https://id.twitch.tv/oauth2/token', {
		method: 'POST',
		body: new URLSearchParams([
			['client_id', PUBLIC_APP_CLIENT_ID],
			['client_secret', APP_CLIENT_SECRET],
			['code', code],
			['grant_type', 'authorization_code'],
			['redirect_uri', `${url.origin}/api/oauth`]
		])
	});
	if (tokenResponse.status !== 200) {
		return { errorMessage: 'fuck' };
	}
	const tokenBody = await tokenResponse.json();
	const validateResponse = await fetch('https://id.twitch.tv/oauth2/validate', {
		headers: {
			Authorization: `OAuth ${tokenBody.access_token}`
		}
	});
	if (validateResponse.status !== 200) {
		return { errorMessage: 'fuck' };
	}
	const validateBody = await validateResponse.json();
	const query = db.query(`
    INSERT OR REPLACE INTO oauth (access_token, refresh_token, user_id) 
    VALUES ($access_token, $refresh_token, $user_id)
  `);
	query.run({
		$user_id: validateBody.user_id,
		$access_token: tokenBody.access_token,
		$refresh_token: tokenBody.refresh_token
	});
	return { success: true };
};
