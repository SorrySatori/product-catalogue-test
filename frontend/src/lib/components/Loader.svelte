<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton'
	
	export let message = 'Načítání produktů...'
</script>

<div class="bg-white rounded-lg shadow-sm p-12 text-center">
	<div class="flex flex-col items-center gap-4">
		<ProgressRadial value={undefined} width="w-12" />
		<p class="text-lg text-gray-600">{message}</p>
	</div>
</div>
