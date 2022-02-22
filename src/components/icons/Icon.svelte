<script lang="ts">
	import OverviewIcon from './OverviewIcon.svelte';
	import FactoryIcon from './FactoryIcon.svelte';
	import RecycleIcon from './RecycleIcon.svelte';
	import ImpactIcon from './ImpactIcon.svelte';

	export let name = '';
</script>

{#if name === 'overview'}
	<OverviewIcon color="#0e171f" width={23} height={23} />
{/if}
{#if name === 'sites'}
	<FactoryIcon color="#0e171f" width={20} height={20} />
{/if}
{#if name === 'treatment'}
	<RecycleIcon color="#0e171f" width={22} height={22} />
{/if}
{#if name === 'impact'}
	<ImpactIcon color="#0e171f" width={27} height={28} />
{/if}
