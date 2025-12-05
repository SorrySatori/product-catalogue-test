<script>
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'

	/**
     * @type {string | any[]}
     */
	let products = []
	let loading = true
	let error = ''

	onMount(async () => {
		console.log('Fetching products from backend...')
		try {
			const response = await fetch('http://localhost:3002/products')
			console.log('Response status:', response.status)
			if (!response.ok) {
				throw new Error('Failed to fetch products')
			}
			products = await response.json()
			console.log('Products loaded:', products.length)
		} catch (e) {
			error = e instanceof Error ? e.message : 'Unknown error'
			console.error('Error fetching products:', e)
		} finally {
			loading = false
		}
	})
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Produkt katalog</strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="container mx-auto p-8">
		<div class="space-y-8">
			<h1 class="h1">Produkt katalog</h1>
			
			{#if loading}
				<div class="card p-8 variant-ghost-surface text-center">
					<p class="text-lg">Načítání produktů...</p>
				</div>
			{:else if error}
				<div class="card p-8 variant-ghost-error text-center">
					<p class="text-lg">Chyba: {error}</p>
				</div>
			{:else if products.length === 0}
				<div class="card p-8 variant-ghost-surface text-center">
					<p class="text-lg">Nejsou produkty.</p>
				</div>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each products as product}
						<div class="card p-6 variant-ghost-surface hover:variant-soft-primary transition-all">
							<h3 class="h3 mb-3">{product.name}</h3>
							<p class="text-surface-600-300-token mb-4">
								{product.description}
							</p>
							{#if product.url}
								<a 
									href={product.url} 
									target="_blank" 
									rel="noopener noreferrer"
									class="btn variant-filled-primary btn-sm"
								>
									View Product
								</a>
							{/if}
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</AppShell>
