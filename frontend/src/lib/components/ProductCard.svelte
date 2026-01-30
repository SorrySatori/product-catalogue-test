<script lang="ts">
	export let product: {
		id: number
		name: string
		description: string
		url: string
		icon?: string
	}
</script>

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
		<a 
			href={product.url} 
			target="_blank"
			rel="noopener noreferrer"
			class="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-center"
		>
			VYZKOUŠET
		</a>
	</div>
</div>
