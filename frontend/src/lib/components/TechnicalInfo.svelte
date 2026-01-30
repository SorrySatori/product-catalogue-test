<script lang="ts">
	export let product: {
		category?: string
		tags?: string[]
	}
</script>

<section class="py-16 bg-gray-50">
	<div class="container mx-auto px-6">
		<div class="max-w-4xl mx-auto">
			<div class="bg-white rounded-xl shadow-sm p-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Technické informace</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h3 class="font-semibold text-gray-700 mb-2">Kategorie</h3>
						<p class="text-gray-600">{product.category || 'Ostatní'}</p>
					</div>
					{#if product.tags && product.tags.length > 0}
						<div class="md:col-span-2">
							<h3 class="font-semibold text-gray-700 mb-2">Tagy</h3>
							<div class="flex flex-wrap gap-2">
								{#each product.tags as tag}
									<span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>
