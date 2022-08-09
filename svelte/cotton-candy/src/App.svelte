<script>
	export let name;
	import MaterilalCalculator from "./MaterialCalculator.svelte";
import EmployeeExpsenseCalc from "./EmployeeExpsenseCalc.svelte";
import AssetsCalc from './AssetCalc.svelte'
</script>

<main>
	<h1>Hello {name}!</h1>
	<h1>Cotton Candy</h1>
	<p>Calculation of raw material, employee expense, profit , waste</p>
	<MaterilalCalculator/>
	<EmployeeExpsenseCalc/>
	<AssetsCalc/>
	
	<hr/>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>