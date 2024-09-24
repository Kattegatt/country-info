<!-- src/components/YearSelector.vue -->
<template>
  <div class="year-selector">
    <div class="btn-group">
      <button
        v-for="year in years"
        :key="year"
        @click="changeYear(year)"
        class="btn btn-outline-primary me-2"
        :class="{ active: year === selectedYear }"
      >
        {{ year }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  selectedYear: Number,
})

const years = computed(() => {
  const currentYear = parseInt(route.params.year) || new Date().getFullYear()
  return Array.from({ length: 11 }, (_, i) => currentYear - 5 + i)
})

const changeYear = (year) => {
  router.push({
    name: 'Country',
    params: { ...route.params, year: year.toString() },
  })
}
</script>

<style scoped>
.year-selector {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>
