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
		background-color: #f9fafb;
		border: 0.1rem solid #0e171f;
		border-radius: 50%;
	}
	img {
		width: 4rem;
		min-width: 4rem;
	}
	@media (max-width: 991.98px) {
		.circle {
			width: 4rem;
			height: 4rem;
		}
		img {
			width: 2rem;
		}
	}
</style>
