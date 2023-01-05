<template>
  <section>
    <div>{{ Math.sqrt(number) }}</div>
    <div>{{ squareRoot + others }}</div>
    <div>{{ square() + others }}</div>
    <input v-model="others">
  </section>
</template>

<script setup>
import { computed } from 'vue'

const number = $ref(1024)
const others = $ref('hi')
const squareRoot = computed(() => {
  console.log('squareRoot', number)
  return Math.sqrt(number)
})

const square = () => {
  console.log('square', number)
  return Math.sqrt(number)
}
</script>
