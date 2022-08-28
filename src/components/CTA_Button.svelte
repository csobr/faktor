<script lang="ts">
	export let background: string = '';
	export let color: string = '';
	export let border: string = '';
</script>

<button
	on:click
	data-tf-popup="HdbmLNpA"
	data-tf-iframe-props="title=Contact"
	style="background-color:{background};color:{color};border:{border};"
	><slot>Request a product demo</slot>
	<script src="//embed.typeform.com/next/embed.js"></script>
</button>

<style>
	button {
		border: 0;
		z-index: 1;
		border-radius: 0.4rem;
		font-weight: 600;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 1.8rem 2.2rem;
		font-size: 1.4rem;
		font-weight: 700;
		cursor: pointer;
		margin: 0 auto;
	}
	@media (max-width: 991.98px) {
		button {
			padding: 1.4rem 1.4rem;
			font-size: 1rem;
		}
	}
</style>
