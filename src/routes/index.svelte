<script>
	import Button from '../components/Button.svelte';
	import Icon from '../components/Icon.svelte';
	import Steps from '../components/Steps.svelte';

	const date = new Date();
</script>

<div class="wrapper">
	<main>
		<header>
			<div class="logo">
				<img src="logo.svg" alt="logo" />
				<img src="logo_word_mark.svg" alt="logo" />
			</div>
			<div class="top-right">
				<Button background="#f9fafb" color="#0e171f" border="0.1rem solid #0e171f" />
			</div>
		</header>
		<section>
			<div class="intro">
				<h1>We help your business mitigate water risk</h1>
				<h2>Our software helps you calculate your facilities water risk in real- time.</h2>
			</div>
			<Button background="#0e171f" color="#f9fafb " />
			<img class="papper-cut" src="cutout.svg" alt="papper cut out effect" />
			<div class="product">
				<img src="landing_product.png" alt="product mockup" />
			</div>
		</section>
		<section><Steps /></section>
		<section>
			<h3>Features</h3>
			<div class="product-detail">
				<div class="one">
					<Icon source="./icons/factory.svg" />
					<div class="description">
						<h4>Facilites</h4>
						<p />
					</div>
				</div>
				<div class="two">
					<Icon source="./icons/recycle.svg" />
					<div class="description">
						<h4>Treatment</h4>
						<p />
					</div>
				</div>
				<div class="three">
					<Icon source="./icons/impact.svg" />
					<div class="description">
						<h4>Impact</h4>
						<p />
					</div>
				</div>
			</div>
		</section>
		<section>
			<h5>Get started</h5>
			<Button background="#0e171f" color="#f9fafb " />
			<p style="color: #6E7378 ; text-align:center; padding:1rem;">
				For general queries, including partnership opportunities,
				<br />please email info@faktor.world.
			</p>
		</section>
	</main>
	<footer>© {date.getFullYear()} faktor All rights reserved</footer>
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
		background-color: #f9fafb;
		background: url('noise.svg');
		color: #0e171f;
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
		z-index: 1;
	}

	h1 {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 6.4rem;
		max-width: 75rem;
		margin: 0;
		line-height: 6rem;
	}
	h2 {
		font-weight: normal;
	}
	.papper-cut {
		width: 125rem;
		height: 100rem;
		position: relative;
		z-index: 0;
	}
	.product {
		margin-top: -65rem;
	}
	.product img {
		align-items: center;
		position: relative;
		width: 100rem;
	}
	.product-detail {
		display: grid;
		align-items: baseline;
		justify-content: center;
		margin: 0 auto;
		grid-template-rows: repeat(3, 1fr);
	}
	.one {
		margin-left: 5rem;
		grid-row: 1/3;
	}
	.two {
		grid-row: 2/3;
		margin-left: -25rem;
	}
	.three {
		grid-row: 3/3;
		margin-left: 20rem;
	}
	.one,
	.two,
	.three {
		display: flex;
		flex-direction: row;
	}
	h3,
	h5 {
		text-align: center;
		font-size: 4.8rem;
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
		width: 50rem;
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
			width: 50rem;
			top: -28rem;
		}
		.product {
			margin-top: -90rem;
		}
		.product img {
			width: 40rem;
		}
		.product-detail {
			display: grid;
			grid-auto-columns: unset;
		}
		.description {
			width: 30rem;
		}
		.one,
		.two,
		.three {
			margin: 0;
			grid-row: unset;
			grid-column: unset;
		}
		h3,
		h5 {
			font-size: 3.4rem;
		}
		p {
			font-size: 1.2rem;
			line-height: 2rem;
		}
	}
</style>
