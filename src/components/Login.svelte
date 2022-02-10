<script>
	import '../global.css';
	import SocialButton from './SocialButton.svelte';

	export let error = '';
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>
<div class="wrapper">
	<section>
		<img class="logo" src="logo_light.svg" alt="logo" />
		<div class="inner">
			<h1>Sign in to Faktor</h1>
			<p>{error}</p>
			<SocialButton text="Continue with Google" on:click />
		</div>
	</section>
	<div class="divider">
		<img src="depth.svg" alt="circle" />
	</div>
</div>

<style>
	.logo {
		height: 7.5rem;
	}
	h1 {
		font-size: 4.8rem;
		font-weight: 700;
		margin: 0;
	}
	.wrapper {
		display: flex;
		height: 100vh;
	}
	img {
		width: auto;
		padding: 3rem;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20%;
		width: 50vw;
	}
	.inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 17rem;
		justify-content: space-between;
	}
	.divider {
		display: flex;
		justify-content: center;
		align-items: center;
		right: 0;
		background-color: #0e171f;
		height: 100%;
		width: 50vw;
		position: absolute;
		z-index: 0;
	}
</style>
