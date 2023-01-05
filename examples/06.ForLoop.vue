<template>
  <ul>
    <li v-for="char in chars" :key="char.id">{{ char.name }}</li>
  </ul>
</template>

<script setup>
const chars = [
  {id: 1, name: 'A'},
  {id: 2, name: 'B'},
  {id: 3, name: 'C'},
  {id: 4, name: 'D'},
]
</script>
