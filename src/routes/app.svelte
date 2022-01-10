<script>
	import '../lib/global.css';
	import FactoryIcon from '../components/icons/FactoryIcon.svelte';
	import ImpactIcon from '../components/icons/ImpactIcon.svelte';
	import OverviewIcon from '../components/icons/OverviewIcon.svelte';
	import RecycleIcon from '../components/icons/RecycleIcon.svelte';
</script>

<main class="container">
	<nav>
		<h1>Faktor</h1>
		<ul class="nav-links">
			<li class="nav-item">
				<OverviewIcon color="#6e7378" width={20} height={20} /><a href="/">Overview</a>
			</li>

			<li class="nav-item">
				<FactoryIcon color="#6e7378" width={20} height={20} /><a href="/">Facilites</a>
			</li>

			<li class="nav-item">
				<RecycleIcon color="#6e7378" width={22} height={22} /><a href="/">Treatment</a>
			</li>

			<li class="nav-item">
				<ImpactIcon color="#6e7378" width={30} height={30} /><a href="/">Impact</a>
			</li>
		</ul>
	</nav>
	<div class="inner" />
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
	.nav-links {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		height: 20rem;
	}
	.nav-links a {
		color: #6e7378;
		text-decoration: none;
		font-size: 1.6rem;
	}
	.nav-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 10rem;
		justify-content: space-around;
	}

	.inner {
		display: flex;
		align-items: flex-end;
		background-color: rgb(255, 255, 255);
		width: 80rem;
		height: 95%;
		border-radius: 1rem;
	}
</style>
