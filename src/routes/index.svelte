<script lang="ts">
	import amplitude from 'amplitude-js';
	import Button from '../components/Button.svelte';
	import Icon from '../components/Icon.svelte';
	import Steps from '../components/Steps.svelte';
	import { varibales } from '$lib/variables';

	const initAmplitude = () => {
		if (typeof window !== 'undefined') {
			amplitude.getInstance().init(varibales.apiKey);
		}
	};
	initAmplitude();
	const identity = new amplitude.Identify();
	const pageView = () => {
		if (typeof window !== 'undefined') {
			amplitude.getInstance().logEvent('Page view', null, {
				includeReferrer: true,
				includeUtm: true,
				includeGclid: true
			});
			amplitude.getInstance().identity(identity);
		}
	};
	pageView();
	const navButton = () => {
		const event = 'Nav contact sales button clicked';
		amplitude.getInstance().logEvent(event);
	};
	const mainCta = () => {
		const event = 'Main contact sales button clicked';
		amplitude.getInstance().logEvent(event);
	};

	const bottomButton = () => {
		const event = 'Bottom contact sales button clicked';
		amplitude.getInstance().logEvent(event);
	};

	const date: Date = new Date();
</script>

<div class="wrapper">
	<main>
		<header>
			<div class="logo">
				<img src="logo.svg" alt="logo" />
				<img src="logo_word_mark.svg" alt="logo" />
			</div>
			<div class="top-right">
				<Button
					on:click={() => navButton()}
					background="#0e171f"
					color="#f9fafb"
					border="0.1rem solid #f9fafb"
				/>
			</div>
		</header>
		<section>
			<div class="intro">
				<h1>Financial water risk assessment in real-time</h1>
				<h2>Faktor monitors your sities water assets and sources in real-time.</h2>
			</div>
			<Button on:click={() => mainCta()} background="#f9fafb" color="#0e171f" />
			<img class="papper-cut" src="cutout.svg" alt="Background layer" />
			<div class="product">
				<img src="landing_product.png" alt="product view" />
			</div>
		</section>
		<section><Steps /></section>
		<h3>Features</h3>
		<section class="product-detail">
			<div class="one">
				<Icon source="./icons/factory.svg" />
				<div class="description">
					<h4>Facilites</h4>
					<p>
						With the input of your operational data manage the water availability in your
						facilities.
					</p>
				</div>
			</div>
			<div class="two">
				<Icon source="./icons/recycle.svg" />
				<div class="description">
					<h4>Treatment</h4>
					<p>Manage your water treatment and measure how much water your reusing.</p>
				</div>
			</div>
			<div class="three">
				<Icon source="./icons/impact.svg" />
				<div class="description">
					<h4>Impact</h4>
					<p>
						Find out the physical, regulatory and reputational risks of the sites you operate in.
					</p>
				</div>
			</div>
		</section>
		<section>
			<h5>Get started</h5>
			<Button on:click={() => bottomButton()} background="#f9fafb" color="#0e171f" />
			<p style="color: #6E7378 ; text-align:center; padding:1rem;">
				For general queries, including partnership opportunities,
				<br />please email info@faktor.world.
			</p>
		</section>
	</main>
	<footer>© {date.getFullYear()} Faktor All rights reserved</footer>
</div>

<style>
	:global(html) {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		font-size: 62.5%;
	}
	:global(body) {
		box-sizing: border-box;
		background-color: #0e171f;
		color: #f9fafb;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1.2rem;
		overflow-x: hidden;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 2rem;
	}

	main {
		flex: 1;
		margin-bottom: 5rem;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 15rem;
	}

	.logo {
		display: flex;
		justify-content: space-between;
		width: 15rem;
		left: 4rem;
		position: relative;
	}
	.top-right {
		right: 0;
		margin-right: 2rem;
	}
	.intro {
		margin-top: 15rem;
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 6.4rem;
		max-width: 80rem;
		margin: 0;
		line-height: 6rem;
	}
	h2 {
		font-weight: normal;
	}
	.papper-cut {
		width: 110rem;
		height: 100rem;
		margin-top: -5rem;
	}
	.product {
		margin-top: -65rem;
		position: relative;
	}
	.product img {
		align-items: center;
		width: 100rem;
	}
	.product-detail {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-content: center;
	}
	.one,
	.two,
	.three {
		display: flex;
		flex-direction: row;
		padding: 2rem;
	}
	h3,
	h5 {
		text-align: center;
		font-size: 3.4rem;
		margin: 3.5rem;
	}
	h4 {
		font-size: 2rem;
		margin: 0;
	}
	p {
		font-size: 1.6rem;
		line-height: 2.8rem;
		font-weight: normal;
	}

	.description {
		display: flex;
		max-width: 25rem;
		flex-direction: column;
		padding-left: 1.5rem;
	}
	footer {
		margin-bottom: 1rem;
		text-align: center;
	}

	@media (max-width: 991.98px) {
		h1 {
			font-size: 3.8rem;
			line-height: 3.8rem;
		}
		.papper-cut {
			width: 60rem;
			height: 50rem;
			position: relative;
		}
		.product {
			margin-top: -35rem;
		}
		.product img {
			width: 40rem;
		}
		.description {
			width: 30rem;
		}
		.product-detail {
			flex-direction: column;
			align-items: center;
		}
		.one,
		.two,
		.three {
			margin: 0;
		}
		h3,
		h5 {
			font-size: 2.8rem;
		}
		p {
			font-size: 1.2rem;
			line-height: 2rem;
		}
	}
</style>
