<script>
    export let data
</script>

<div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200">
        <div class="container mx-auto px-6 py-4">
            <a href="/" class="text-sm font-semibold text-blue-600 hover:text-blue-800 uppercase tracking-wide">
                ← ZPĚT NA KATALOG
            </a>
        </div>
    </header>

    <div class="container mx-auto px-6 py-12">
        {#if data.error}
            <div class="bg-red-50 border border-red-200 rounded-lg p-8">
                <h2 class="text-2xl font-bold text-red-900 mb-2">Chyba</h2>
                <p class="text-red-700">{data.error}</p>
            </div>
        {:else if !data.product}
            <div class="bg-white rounded-lg shadow-sm p-8">
                <p class="text-gray-600">Produkt nenalezen.</p>
            </div>
        {:else}
            <div class="bg-white rounded-lg shadow-sm p-8">
                <h1 class="text-4xl font-bold text-gray-900 mb-4">{data.product.name}</h1>
                <p class="text-lg text-gray-700 leading-relaxed">{data.product.description}</p>
                
                {#if data.product.url}
                    <div class="mt-8">
                        <a 
                            href={data.product.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                        >
                            Navštívit web
                        </a>
                    </div>
                {/if}
            </div>
        {/if}
    </div>
</div>
