<script lang="ts">
	export let title: string = '';
	export let number: number = 0;
	export let symbol: string = '';
	export let currency: string = '';
	export let unit: string = '';
</script>

<div class="container">
	<h3>{title}</h3>
	<div class="result">
		<span class="triangel">{symbol}</span>
		<span class="number">{currency}</span>
		<p class="number">{number}</p>
		<p class="unit">{unit}</p>
	</div>
</div>

<style>
	.container {
		background: #f9fafb;
		border: 0.1rem solid #dbdcdd;
		box-sizing: border-box;
		border-radius: 0.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 25rem;
		height: 9rem;
		padding: 1rem;
	}

	h3 {
		font-size: 1.4rem;
		padding-bottom: 1rem;
	}
	.number {
		font-size: 2.4rem;
		font-weight: 700;
	}
	.triangel {
		color: transparent;
		font-size: 2rem;
		padding-right: 0.5rem;
		text-shadow: 0 0 0 #96f26a;
	}

	.result {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}
	.unit {
		font-size: 1.2rem;
		color: #6e7378;
		font-weight: 700;
		text-transform: uppercase;
		padding-left: 0.5rem;
	}
</style>
