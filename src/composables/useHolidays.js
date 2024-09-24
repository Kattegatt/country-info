import { ref } from 'vue'
import axios from 'axios'
const BASE = import.meta.env.VITE_API_BASE_URL

export function useHolidays() {
  const holidays = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchHolidays = async (countryCode, year) => {
    loading.value = true
    try {
      const response = await axios.get(
        BASE + `/PublicHolidays/${year}/${countryCode}`
      )
      holidays.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch holidays'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const fetchNextHoliday = async (countryCode) => {
    loading.value = true
    try {
      const response = await axios.get(
        `https://date.nager.at/api/v3/NextPublicHolidays/${countryCode}`
      )
      return response.data[0] // Return the next holiday
    } catch (err) {
      error.value = 'Failed to fetch next holiday'
      console.error(err)
      return null
    } finally {
      loading.value = false
    }
  }

  return { holidays, loading, error, fetchHolidays, fetchNextHoliday }
}
