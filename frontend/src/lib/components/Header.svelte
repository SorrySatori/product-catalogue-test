<script lang="ts">
	export let showBackButton = false
</script>

<header class="bg-white border-b border-gray-200">
	<div class="container mx-auto px-6 py-4 flex items-center justify-between">
		<a href="/">
			<img src="/header_logo.png" alt="Prorocketeers Logo" class="h-[36px] w-auto" />
		</a>
		{#if showBackButton}
			<a href="/" class="text-sm font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wide">
				← ZPĚT NA KATALOG
			</a>
		{/if}
	</div>
</header>
