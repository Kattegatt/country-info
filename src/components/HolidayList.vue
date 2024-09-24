<template>
  <div>
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <ul v-else class="list-group">
      <li
        v-for="holiday in holidays"
        :key="holiday.date"
        class="list-group-item"
      >
        <h5>{{ holiday.name }}</h5>
        <p>Date: {{ holiday.date }}</p>
        <p>Type: {{ holiday.types.join(', ') }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  holidays: Array,
  loading: Boolean,
})
</script>
