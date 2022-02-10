import createAuth0Client from '@auth0/auth0-spa-js';
import { user, isAuthenticated, openPopup, setError } from './store';
import { varibales } from './variables';

async function createClient() {
	let auth0Client = await createAuth0Client({
		domain: varibales.domain,
		client_id: varibales.clientId
	});

	return auth0Client;
}
async function loginWithPopup(client, options) {
	openPopup.set(true);
	try {
		await client.loginWithPopup(options);
		user.set(await client.getUser());
		isAuthenticated.set(true);
	} catch (error) {
		setError.set(error.message);
	} finally {
		openPopup.set(false);
	}
}

function logout(client) {
	return client.logout({
		return_to: window.location.origin
	});
}

const auth = {
	createClient,
	loginWithPopup,
	logout
};

export default auth;
