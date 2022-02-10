<script>
	import HighlightCard from '../components/HighlightCard.svelte';
</script>

<h2>Overview</h2>
<br />
<br />
<div class="container">
	<HighlightCard title={'Financial risk projection'} currency={'$'} number={1001011} />
	<HighlightCard title={'Recycled'} number={1000000} unit={'ytd'} />
	<HighlightCard title={'Impact Score'} symbol={'🔺'} number={60} />
</div>

<style>
	h2 {
		font-size: 2.4rem;
	}
	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80%;
	}
</style>
