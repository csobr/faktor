<script lang="ts">
	import '../global.css';
	import { onMount } from 'svelte';

	import auth from '../lib/authService';
	import { isAuthenticated, organizations, organization, setError, user } from '../lib/store';

	import { navOptions } from '../components/Navigation.svelte';
	import Icon from '../components/icons/Icon.svelte';
	import Login from '../components/Login.svelte';
	import { varibales } from '$lib/variables';

	let auth0Client;

	onMount(async () => {
		auth0Client = await auth.createClient();
		isAuthenticated.set(await auth0Client.isAuthenticated());
		user.set(await auth0Client.getUser());
		// store values
		organizations.set(await getOrganizations());
		getOrg();
		handleErrorMessage();
	});

	function getOrgId(orgName) {
		return $isAuthenticated ? orgName.id === $user.org_id : null;
	}
	function getOrg() {
		organization.set($organizations.find(getOrgId));
	}
	async function getOrganizations() {
		const response = await fetch('https://dev-8oc3hfqx.us.auth0.com/api/v2/organizations', {
			method: 'GET',
			headers: {
				authorization: `Bearer ${varibales.access_token}`
			}
		})
			.then((res) => res.json())
			.catch((error) => {
				console.log('Error:', error);
			});

		return response;
	}

	function login() {
		auth.loginWithPopup(auth0Client);
	}

	function logout() {
		auth.logout(auth0Client);
	}

	let selected = navOptions[0];
	let intSelected = 0;

	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
	const handleErrorMessage = () => {
		const org = $setError.includes('organization') ? $setError : 'org';
		switch ($setError) {
			case org:
				return 'You are not appart of this organization. Request access from your administrator';
			case 'Popup closed':
				return 'Popup closed, please try again';
			case 'Timeout':
				return 'App not responding, please try again ';
			default:
				return '';
		}
	};
</script>

<svelte:head>
	<title>{$isAuthenticated ? 'Dashboard' : 'Sign In'}</title>
</svelte:head>

<main class="container">
	{#if $isAuthenticated}
		<nav>
			<h1>{$organization.name}</h1>
			<ul class="nav-links">
				{#each navOptions as option, i}
					<li class="nav-item" class:active={intSelected == i ? 'active' : ''}>
						<Icon name={option.page} />
						<button id={i} on:click={changeComponent}>{option.page}</button>
					</li>
				{/each}
			</ul>
			<li><button href="/login" on:click={logout}>Log out</button></li>
		</nav>
	{:else}
		<Login on:click={login} error={handleErrorMessage()} />
	{/if}
	<div class="inner">
		<svelte:component this={selected.component} />
	</div>
</main>

<style>
	.container {
		display: flex;
		height: 100vh;
		background-color: #f9fafb;
		color: #0e171f;
	}
	nav {
		text-align: center;
		width: 18rem;
		padding-top: 4rem;
		padding-left: 2rem;
	}
	h1 {
		text-transform: uppercase;
		padding-bottom: 1rem;
		margin-left: -3rem;
	}
	.nav-links {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		padding: 0;
		height: 22rem;
	}
	.nav-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		list-style: none;
		height: 5rem;
		width: 19rem;
		padding-left: 2rem;
	}
	.active {
		display: flex;
		align-items: center;
		width: 19rem;
		height: 5rem;
		background-color: #e3e8ec;
		border-radius: 1rem;
	}
	button {
		border: none;
		cursor: pointer;
		background: none;
		font-size: 1.6rem;
		padding: 0 1.3rem 0 2rem;
		color: #0e171f;
		text-transform: capitalize;
	}
	.inner {
		padding-left: 5rem;
		padding-top: 3rem;
		margin: 2rem;
		background-color: rgb(255, 255, 255);
		width: 90%;
		border-radius: 1rem;
	}
</style>
