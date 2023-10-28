import { APP_CLIENT_SECRET } from '$env/static/private';
import { PUBLIC_APP_CLIENT_ID } from '$env/static/public';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const code = url.searchParams.get('code');
	if (code) {
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
		if (tokenResponse.status === 200) {
			const token = await tokenResponse.json();
			console.log(token);
			const validateResponse = await fetch('https://id.twitch.tv/oauth2/validate', {
				headers: {
					Authorization: `OAuth ${token.access_token}`
				}
			});
			console.log(validateResponse);
			const validate = await validateResponse.json();
			console.log(token, validate);
			return { success: true };
		}
		const json = await tokenResponse.json();
		if (json.message) {
			return { errorMessage: json.message };
		}
		return { errorMessage: 'Unknown error' };
	}
	const errorMessage = url.searchParams.get('error_message');
	return { errorMessage };
};
