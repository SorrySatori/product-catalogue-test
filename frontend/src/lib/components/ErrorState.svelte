<script lang="ts">
	export let title = 'Chyba'
	export let message: string
</script>

<div class="container mx-auto px-6 py-12">
	<div class="bg-red-50 border border-red-200 rounded-lg p-8">
		<h2 class="text-2xl font-bold text-red-900 mb-2">{title}</h2>
		<p class="text-red-700">{message}</p>
	</div>
</div>
