<script lang="ts">
	import '../lib/global.css';
	import { navOptions } from '../components/Navigation.svelte';
	import Icon from '../components/icons/Icon.svelte';

	let selected = navOptions[0];
	let intSelected = 0;

	function changeComponent(event) {
		selected = navOptions[event.srcElement.id];
		intSelected = event.srcElement.id;
	}
</script>

<main class="container">
	<nav>
		<h1>Faktor</h1>
		<ul class="nav-links">
			{#each navOptions as option, i}
				<li class="nav-item" class:active={intSelected == i ? 'active' : ''}>
					<Icon name={option.page} />
					<a id={i} on:click={changeComponent}>{option.page}</a>
				</li>
			{/each}
		</ul>
	</nav>
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
		width: 25rem;
	}
	h1 {
		padding: 1rem;
		text-transform: uppercase;
	}
	.nav-links {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		padding: 0;
		margin: 5rem;
		height: 22rem;
	}
	.nav-links a {
		padding-left: 1rem;
		color: #6e7378;
		text-decoration: none;
		font-size: 1.6rem;
		text-transform: capitalize;
	}
	.nav-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		list-style: none;
		width: 15rem;
		padding-left: 2rem;
	}
	.active {
		display: flex;
		align-items: center;
		padding-left: 2rem;
		width: 15rem;
		height: 5rem;
		background-color: #e3e8ec;
		border-radius: 10px;
	}

	.inner {
		background-color: rgb(255, 255, 255);
		width: 90%;
		border-radius: 1rem;
	}
</style>
