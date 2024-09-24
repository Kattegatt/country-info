<template>
  <div class="container mt-4">
    <div class="row d-flex align-items-center">
      <div class="col d-flex align-items-center mb-3">
        <button class="btn btn-outline-dark me-3" @click="routeHome">
          <span class="material-symbols-outlined">&laquo;</span>
        </button>
        <h1 class="mb-0">{{ countryName }}</h1>
      </div>
    </div>
    <HolidayList :holidays="holidays" :loading="loading" />
    <YearSelector :selectedYear="selectedYear" @year-changed="changeYear" />
  </div>
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCountries } from '../composables/useCountries'
import { useHolidays } from '../composables/useHolidays'
import YearSelector from '../components/YearSelector.vue'
import HolidayList from '../components/HolidayList.vue'

const route = useRoute()
const router = useRouter()
const { countries, fetchCountries } = useCountries()
const { holidays, loading, fetchHolidays } = useHolidays()

const countryCode = ref(route.params.code)
const selectedYear = ref(
  parseInt(route.params.year) || new Date().getFullYear()
)
const countryName = ref('')

const routeHome = () => {
  router.push({ name: 'Home' })
}

const changeYear = (year) => {
  selectedYear.value = year
  router.push({
    name: 'Country',
    params: { code: countryCode.value, year: year.toString() },
  })
}

const updateDataFromRoute = async () => {
  countryCode.value = route.params.code
  selectedYear.value = parseInt(route.params.year) || new Date().getFullYear()

  if (countries.value.length === 0) await fetchCountries()
  const country = countries.value.find(
    (c) => c.countryCode === countryCode.value
  )
  if (country) countryName.value = country.name
  await fetchHolidays(countryCode.value, selectedYear.value)
}

onMounted(updateDataFromRoute)

watchEffect(() => {
  if (
    route.params.code !== countryCode.value ||
    parseInt(route.params.year) !== selectedYear.value
  ) {
    updateDataFromRoute()
  }
})
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

p {
  padding: 0;
  margin: 0;
}

h1 {
  margin-bottom: 0;
}
</style>
