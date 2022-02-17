<div class="container">
	<div class="circle">
		<p>Explore</p>
	</div>
	<div class="arrow">
		<span class="line" />
		<span class="triangle" />
	</div>
	<div class="circle">
		<p>Assess</p>
	</div>
	<div class="arrow">
		<span class="line" />
		<span class="triangle" />
	</div>
	<div class="circle">
		<p>Manage</p>
	</div>
	<div class="arrow">
		<span class="line" />
		<span class="triangle" />
	</div>
	<div class="circle">
		<p>Act</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100rem;
	}
	.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 15rem;
		height: 15rem;
		border: 0.1rem solid #f9fafb;
		border-radius: 50%;
	}
	p {
		font-size: 1.6rem;
		font-weight: 700;
		text-transform: uppercase;
	}
	.arrow {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1rem;
	}
	.line {
		height: 0.1rem;
		width: 5rem;
		background-color: #f9fafb;
	}
	.triangle {
		width: 0;
		height: 0;
		border-top: 1rem solid transparent;
		border-bottom: 1rem solid transparent;
		border-left: 1.3rem solid #f9fafb;
	}
	@media (max-width: 991.98px) {
		.container {
			width: 100%;
		}
		.arrow {
			padding: 0;
		}
		.circle {
			width: 5rem;
			height: 5rem;
			min-width: 5rem;
			min-height: 5rem;
			padding: 1rem;
		}
		.line {
			width: 1rem;
		}
		.triangle {
			width: 0;
			height: 0;
			border-top: 0.3rem solid transparent;
			border-bottom: 0.3rem solid transparent;
			border-left: 0.5rem solid #f9fafb;
		}
		p {
			font-size: 1rem;
		}
	}
</style>
