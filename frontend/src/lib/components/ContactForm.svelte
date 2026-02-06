<script lang="ts">
    import { onMount } from 'svelte'

    onMount(() => {
        // Load the ClickUp forms embed script
        const script = document.createElement('script')
        script.src = 'https://app-cdn.clickup.com/assets/js/forms-embed/v1.js'
        script.async = true
        document.body.appendChild(script)
    })
</script>

<section class="py-16 px-4 bg-white">
    <div class="w-full mx-auto">
        <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-3">
                Máte zájem o více informací? 📬
            </h2>
            <p class="text-lg text-gray-600">
                Vyplňte kontaktní formulář a my se vám ozveme co nejdříve
            </p>
        </div>
        
        <div class="bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <iframe
                class="clickup-embed clickup-dynamic-height"
                src="https://forms.clickup.com/4501577/f/49c29-14955/VX7IWFRXD9AQP03S1V"
                width="100%"
                height="100%"
                style="background: transparent; border: none; min-height: 900px;"
                title="Kontaktní formulář"
            />
        </div>
    </div>
</section>
