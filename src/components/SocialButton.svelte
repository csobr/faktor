<script lang="ts">
	export let text: string = '';
</script>

<button on:click>
	<img src="google.svg" alt="google_icon" />
	<slot>{text}</slot>
</button>

<style>
	img {
		padding-right: 1.5rem;
	}
	button {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1.5rem 4.5rem;
		border: 0;
		border-radius: 0.4rem;
		border: 0.1rem solid #f9fafb;
		background-color: #0e171f;
		font-size: 1.6rem;
		font-weight: 700;
		cursor: pointer;
		color: #f9fafb;
	}
	@media (max-width: 991.98px) {
		button {
			padding: 1.4rem 1.4rem;
		}
	}
</style>
