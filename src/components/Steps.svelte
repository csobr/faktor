<section>
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
</section>

<style>
	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 4rem;
		width: 100%;
		max-width: 100rem;
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
		.circle {
			width: 6rem;
			height: 6rem;
			min-width: 6rem;
			min-height: 6rem;
		}
		.line {
			width: 2rem;
		}
		.triangle {
			width: 0;
			height: 0;
			border-top: 0.5rem solid transparent;
			border-bottom: 0.5rem solid transparent;
			border-left: 1rem solid #f9fafb;
		}
		p {
			font-size: 1.2rem;
		}
	}
</style>
