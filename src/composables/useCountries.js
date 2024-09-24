import { ref } from 'vue'
import axios from 'axios'
const BASE = import.meta.env.VITE_API_BASE_URL

export function useCountries() {
  const countries = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchCountries = async () => {
    loading.value = true
    try {
      const response = await axios.get(BASE + '/AvailableCountries')
      countries.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch countries'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { countries, loading, error, fetchCountries }
}
