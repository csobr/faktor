<script lang="ts">
	import OverviewIcon from './OverviewIcon.svelte';
	import FactoryIcon from './FactoryIcon.svelte';
	import RecycleIcon from './RecycleIcon.svelte';
	import ImpactIcon from './ImpactIcon.svelte';

	export let name = '';
</script>

{#if name === 'overview'}
	<OverviewIcon color="#6e7378" width={22} height={22} />
{/if}
{#if name === 'sites'}
	<FactoryIcon color="#6e7378" width={20} height={20} />
{/if}
{#if name === 'treatment'}
	<RecycleIcon color="#6e7378" width={22} height={22} />
{/if}
{#if name === 'impact'}
	<ImpactIcon color="#6e7378" width={28} height={28} />
{/if}
