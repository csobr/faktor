<script context="module">
	import Overview from '../routes/overview.svelte';
	import Sites from '../routes/sites.svelte';
	import Recycle from '../routes/treatment.svelte';
	import Impact from '../routes/impact.svelte';

	export const navOptions = [
		{ page: 'overview', component: Overview },
		{ page: 'sites', component: Sites },
		{ page: 'treatment', component: Recycle },
		{ page: 'impact', component: Impact }
	];
</script>
