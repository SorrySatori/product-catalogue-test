<script lang="ts">
    import ErrorState from '$lib/components/ErrorState.svelte'
    import TeamMember from '$lib/components/TeamMember.svelte'
    import HeroSection from '$lib/components/HeroSection.svelte'
    import FeaturesSection from '$lib/components/FeaturesSection.svelte'
    
    export let data

    // Get icon color based on product name
    function getIconColor(name: string): string {
        const firstLetter = name.charAt(0).toUpperCase()
        const colors: Record<string, string> = {
            'W': 'bg-blue-500',
            'M': 'bg-orange-500',
            'O': 'bg-cyan-500',
            'P': 'bg-pink-500',
            'D': 'bg-gray-600',
            'G': 'bg-gray-700',
            'U': 'bg-purple-500',
            'Q': 'bg-teal-500'
        }
        return colors[firstLetter] || 'bg-indigo-500'
    }

    $: features = data.product?.features || []
    $: teamMembers = data.product?.teamMembers || []
    $: teamDescription = data.product?.teamDescription || 'Náš tým zkušených vývojářů a designérů pracuje na vytváření nejlepších nástrojů pro vaši produktivitu. Věříme v open-source a komunitní přístup k vývoji softwaru.'
    $: iconColor = data.product ? getIconColor(data.product.name) : ''
</script>

<div class="min-h-screen bg-gray-50">
    {#if data.error}
        <ErrorState message={data.error} />
    {:else if !data.product}
        <ErrorState title="Produkt nenalezen" message="Produkt nenalezen." />
    {:else}
        <HeroSection product={data.product} {iconColor} />

        <FeaturesSection {features} />

        <section class="py-16 bg-gradient-to-br from-[#0a1f44] to-[#1a3a6e] text-white">
            <div class="container mx-auto px-6">
                <div class="flex flex-col lg:flex-row items-center gap-12 mb-16">
                    <div class="flex-1">
                        <h2 class="text-3xl lg:text-4xl font-bold mb-4">Kdo stojí za vývojem</h2>
                        <p class="text-gray-300 leading-relaxed">
                            {teamDescription}
                        </p>
                    </div>
                    <div class="flex-1 flex justify-center">
                        <div class="text-8xl">✈️</div>
                    </div>
                </div>

                <div>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {#each teamMembers as member}
                            <TeamMember {member} />
                        {/each}
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-white rounded-xl shadow-sm p-8">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Technické informace</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 class="font-semibold text-gray-700 mb-2">Kategorie</h3>
                                <p class="text-gray-600">{data.product.category || 'Ostatní'}</p>
                            </div>
                            {#if data.product.tags && data.product.tags.length > 0}
                                <div class="md:col-span-2">
                                    <h3 class="font-semibold text-gray-700 mb-2">Tagy</h3>
                                    <div class="flex flex-wrap gap-2">
                                        {#each data.product.tags as tag}
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
    {/if}
</div>
