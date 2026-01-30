<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'
	
	export let member: {
		name: string
		role: string
		avatar: string
	}
</script>

<div class="text-center">
	<Avatar 
		initials={member.avatar}
		background="bg-gradient-to-br from-blue-400 to-blue-600"
		width="w-24 h-24"
		class="mx-auto mb-3 shadow-lg text-4xl"
	/>
	<h4 class="font-semibold text-white mb-1">{member.name}</h4>
	<p class="text-sm text-gray-300">{member.role}</p>
</div>
