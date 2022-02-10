<script context="module">
	import Overview from '../app/overview.svelte';
	import Sites from '../app/sites.svelte';
	import Recycle from '../app/treatment.svelte';
	import Impact from '../app/impact.svelte';

	export const navOptions = [
		{ page: 'overview', component: Overview },
		{ page: 'sites', component: Sites },
		{ page: 'treatment', component: Recycle },
		{ page: 'impact', component: Impact }
	];
</script>
