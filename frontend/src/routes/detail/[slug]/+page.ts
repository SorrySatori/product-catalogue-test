import { getApiUrl } from '$lib/config/api'

export async function load({ params, fetch }) {
  const slug = params.slug
  
  try {
    const response = await fetch(getApiUrl(`products/${slug}`))
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`)
    }
    
    const product = await response.json()
    
    return {
      product,
      slug
    }
  } catch (error) {
    console.error('Error fetching product:', error)
    return {
      product: null,
      slug,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}