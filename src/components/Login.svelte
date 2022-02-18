<script>
	import '../global.css';
	import SocialButton from './SocialButton.svelte';

	export let error = '';
</script>

<div class="wrapper">
	<section>
		<img class="logo" src="logo_light.svg" alt="logo" />
		<div class="inner">
			<h1>Sign in to Faktor</h1>
			<div class="error-message">
				{#if error}
					<img alt="error-icon" src="/icons/error.svg" />
					<p>{error}</p>
				{/if}
			</div>
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
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.error-message {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: auto;
		align-items: center;
	}
	.error-message p {
		color: #ff0606;
		font-size: 1.6rem;
	}
	.error-message img {
		padding: 1rem;
	}
	.wrapper {
		display: flex;
		height: 100%;
		background-color: #e3e8ec;
	}
	img {
		width: auto;
		padding: 3rem;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50vw;
		margin-top: -30%;
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
