<script lang="ts">
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
</script>

<div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/">
                <img src="/header_logo.png" alt="Prorocketeers Logo" class="h-[36px] w-auto" />
            </a>
            <a href="/" class="text-sm font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wide">
                ← ZPĚT NA KATALOG
            </a>
        </div>
    </header>

    {#if data.error}
        <div class="container mx-auto px-6 py-12">
            <div class="bg-red-50 border border-red-200 rounded-lg p-8">
                <h2 class="text-2xl font-bold text-red-900 mb-2">Chyba</h2>
                <p class="text-red-700">{data.error}</p>
            </div>
        </div>
    {:else if !data.product}
        <div class="container mx-auto px-6 py-12">
            <div class="bg-white rounded-lg shadow-sm p-8">
                <p class="text-gray-600">Produkt nenalezen.</p>
            </div>
        </div>
    {:else}
        <section class="bg-gradient-to-br from-[#0a1f44] to-[#1a3a6e] text-white py-20">
            <div class="container mx-auto px-6">
                <div class="flex flex-col lg:flex-row items-center gap-12">
                    <div class="flex-1 space-y-6">
                        <div class="flex items-center gap-4">
                            <div class="{getIconColor(data.product.name)} w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                                {data.product.icon || data.product.name.charAt(0)}
                            </div>
                            <h1 class="text-4xl lg:text-5xl font-bold">{data.product.name}</h1>
                        </div>
                        
                        <p class="text-lg text-gray-200 leading-relaxed max-w-2xl">
                            {data.product.description}
                        </p>

                        {#if data.product.extendedDescription}
                            <p class="text-gray-300 leading-relaxed max-w-2xl">
                                {data.product.extendedDescription}
                            </p>
                        {/if}

                        <div class="flex gap-4 pt-4">
                            <a 
                                href={data.product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
                            >
                            INSTALOVAT
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-16 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Hlavní funkce produktu
                    </h2>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        Podtitulek
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {#each features as feature}
                        <div class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div class="text-4xl mb-4">{feature.icon}</div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p class="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </section>

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
                            <div class="text-center">
                                <div class="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl mb-3 shadow-lg">
                                    {member.avatar}
                                </div>
                                <h4 class="font-semibold text-white mb-1">{member.name}</h4>
                                <p class="text-sm text-gray-300">{member.role}</p>
                            </div>
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
                            <div>
                                <h3 class="font-semibold text-gray-700 mb-2">Instalovatelné</h3>
                                <p class="text-gray-600">{data.product.installable ? 'Ano' : 'Ne'}</p>
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
