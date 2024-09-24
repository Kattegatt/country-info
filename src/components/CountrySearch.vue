<template>
  <div class="mb-3">
    <input
      v-model="searchQuery"
      @input="filterCountries"
      type="text"
      class="form-control mb-3"
      placeholder="Search for a country"
    />
    <ul class="list-group mt-2">
      <div
        v-for="country in filteredCountries"
        :key="country.countryCode"
        class="card mb-3 router-link-container"
        @click="
          $router.push({
            name: 'Country',
            params: {
              code: country.countryCode,
              year: new Date().getFullYear(),
            },
          })
        "
      >
        <div class="card-body">{{ country.name }}</div>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCountries } from '../composables/useCountries'

const { countries, fetchCountries } = useCountries()
const searchQuery = ref('')

fetchCountries()

const filteredCountries = computed(() => {
  if (!searchQuery.value) return countries.value
  return countries.value.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filterCountries = () => {
  // This function can be used to implement debounce if needed
}
</script>

<style>
.router-link {
  color: #000;
  text-decoration: none;
}

.router-link-container {
  cursor: pointer;
}

.router-link-container:hover {
  background-color: antiquewhite;
  transition: linear 0.2s all;
}
</style>
