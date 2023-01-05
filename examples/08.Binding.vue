<template>
  <input v-model="say">
  <h1>{{ say }}</h1>
</template>

<script setup>
const say = $ref('')
</script>
