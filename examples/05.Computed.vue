<template>
  <section>
    <div>{{ Math.sqrt(number) }}</div>
    <div>{{ squareRoot }}</div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const number = $ref(1024)
const squareRoot = computed(() => Math.sqrt(number))
</script>
