<template>
  <div class="container mt-4">
    <div class="row-cols-1">
      <button @click="routeHome"><-</button>
      <h1>{{ countryName }}</h1>
    </div>
    <HolidayList :holidays="holidays" :loading="loading" />
    <YearSelector
      class="fixed-bottom"
      :selectedYear="selectedYear"
      @year-changed="changeYear"
    />
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'
import { useCountries } from '../composables/useCountries'
import { useHolidays } from '../composables/useHolidays'
import YearSelector from '../components/YearSelector.vue'
import HolidayList from '../components/HolidayList.vue'

const route = useRoute()
const { countries, fetchCountries } = useCountries()
const { holidays, loading, fetchHolidays } = useHolidays()

const countryCode = ref(route.params.code)
const selectedYear = ref(new Date().getFullYear())
const countryName = ref('')

const routeHome = () => {
  router.push({ name: 'Home' })
}

const changeYear = (year) => {
  selectedYear.value = year
  router.push({ name: 'Country', params: { code: countryCode.value, year } })
}

watchEffect(async () => {
  if (countries.value.length === 0) await fetchCountries()
  const country = countries.value.find(
    (c) => c.countryCode === countryCode.value
  )
  if (country) countryName.value = country.name
  await fetchHolidays(countryCode.value, selectedYear.value)
})
</script>
