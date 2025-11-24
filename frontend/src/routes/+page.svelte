<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
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
			
			<div class="card p-4 variant-ghost-surface">
				<p class="text-lg">
					Test page
				</p>
			</div>

			<button class="btn variant-filled-primary">
				Get Started
			</button>
		</div>
	</div>
</AppShell>
