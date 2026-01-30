<script>
	import { onMount } from 'svelte'
	import Loader from '$lib/components/Loader.svelte'

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
					<div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
						<div class="flex items-start gap-4 mb-4">
							<div class="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
								{product.name}
							</div>
							<div class="flex-1 min-w-0">
								<h3 class="font-bold text-gray-900 mb-2">{product.name}</h3>
								<p class="text-sm text-gray-600">{product.description}</p>
							</div>
						</div>

						<div class="flex gap-2">
							<a 
								href={`/detail/${product.id}`}
								class="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-center"
							>
								DETAIL
							</a>
								<button
									class="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
								>
								<a 
									href={product.url} 
									target="_blank"
									rel="noopener noreferrer"
								>
									INSTALOVAT
								</a>
								</button>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
