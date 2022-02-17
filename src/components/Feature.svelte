<script lang="ts">
	export let source: string = '/';
</script>

<div class="circle"><img src={source} alt="icon" /></div>

<style>
	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10rem;
		height: 10rem;
		min-width: 10rem;
		min-height: 10rem;
		border: 0.1rem solid #f9fafb;
		border-radius: 50%;
	}
	img {
		width: 4rem;
		min-width: 4rem;
	}
	@media (max-width: 991.98px) {
		.circle {
			width: 5rem;
			height: 5rem;
			min-width: 5rem;
			min-height: 5rem;
		}
		img {
			width: 2rem;
			min-width: 2rem;
		}
	}
</style>
