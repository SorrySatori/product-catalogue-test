<script lang="ts">
	export let title = 'Chyba'
	export let message: string
</script>

<div class="container mx-auto px-6 py-12">
	<aside class="alert variant-filled-error">
		<div class="alert-message">
			<h2 class="text-2xl font-bold mb-2">{title}</h2>
			<p>{message}</p>
		</div>
	</aside>
</div>
