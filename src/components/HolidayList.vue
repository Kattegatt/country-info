<template>
  <div>
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <ul v-else class="list-group">
      <div v-for="holiday in holidays" :key="holiday.date" class="card mb-3">
        <div class="card-body">
          <h5 v-if="holiday.localName != holiday.name">
            {{ holiday.localName }} ({{ holiday.name }})
          </h5>
          <h5 v-else>{{ holiday.name }}</h5>
          <p>Date: {{ holiday.date }}</p>
          <p>Type: {{ holiday.types.join(', ') }}</p>
        </div>
      </div>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  holidays: Array,
  loading: Boolean,
})
</script>

<style>
p {
  margin-bottom: 0;
}
</style>
