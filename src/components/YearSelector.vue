<template>
  <div class="mb-3">
    <button
      v-for="year in years"
      :key="year"
      @click="$emit('year-changed', year)"
      class="btn btn-outline-primary me-2"
      :class="{ active: year === selectedYear }"
    >
      {{ year }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  selectedYear: Number,
})

const years = computed(() => {
  const currentYear = route.params.year //new Date().getFullYear()
  return Array.from({ length: 11 }, (_, i) => 2020 + i)
})
</script>
