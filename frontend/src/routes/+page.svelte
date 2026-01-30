<script>
	import { onMount } from 'svelte'
	import Loader from '$lib/components/Loader.svelte'
	import ProductCard from '$lib/components/ProductCard.svelte'

	/**
     * @type {any[]}
     */
	let products = []
	let loading = true

	onMount(async () => {
		console.log('Fetching products from backend...')
		try {
			const response = await fetch('http://localhost:3002/products')
			if (!response.ok) {
				throw new Error('Failed to fetch products')
			}
			products = await response.json()
		} catch (e) {
			console.error('Error fetching products:', e)
		} finally {
			loading = false
		}
	})
</script>

<div class="bg-gray-50">
	<div class="container mx-auto px-6 py-12">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold text-gray-900 mb-4">Produkt katalog</h1>
			<p class="text-lg text-gray-600">Nezjednoduší vám něco nabídky nástrojů a aplikací Pro Labs život?</p>
		</div>

		{#if loading}
			<Loader />
		{:else}

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each products as product}
					<ProductCard {product} />
				{/each}
			</div>
		{/if}
	</div>
</div>
