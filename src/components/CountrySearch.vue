<!-- src/components/CountrySearch.vue -->
<template>
  <div class="mb-3">
    <input
      v-model="searchQuery"
      @input="filterCountries"
      type="text"
      class="form-control mb-3"
      placeholder="Search for a country"
    />
    <div class="country-list-container">
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
    </div>
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

<style scoped>
.country-list-container {
  max-height: 80vh;
  overflow-y: auto;
  border: none #dee2e6;
  padding-right: 4px;
}

.router-link-container {
  cursor: pointer;
}

.router-link-container:hover {
  background-color: antiquewhite;
  transition: linear 0.2s all;
}

/* Custom scrollbar styles for webkit browsers */
.country-list-container::-webkit-scrollbar {
  width: 8px;
}

.country-list-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.country-list-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.country-list-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
