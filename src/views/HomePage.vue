<template>
  <div class="container mt-4">
    <h1>Country Info</h1>
    <div class="row">
      <div class="col-md-6">
        <CountrySearch />
      </div>
      <div class="col-md-6">
        <RandomCountriesWidget />
      </div>
    </div>
  </div>
</template>

<script setup>
import CountrySearch from '../components/CountrySearch.vue'
import RandomCountriesWidget from '../components/RandomCountriesWidget.vue'
</script>
