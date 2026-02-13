import { PUBLIC_API_URL } from '$env/static/public'

export const API_BASE_URL = PUBLIC_API_URL || 'http://localhost:3002'

export function getApiUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${API_BASE_URL}/${cleanPath}`
}
