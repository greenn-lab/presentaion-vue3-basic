<template>
  <section>
    <h1 v-if="show">{{ message.title }}</h1>
    <div v-html="message.subtitle"></div>
    <div>{{ tweeting }}</div>
  </section>
</template>
<script setup>
import { computed } from 'vue'

const show = $ref(true)
const message = $ref({
  title: 'Composition API',
  subtitle: 'it be <strong>great</strong>!'
})

const tweeting = computed(() => {
  const { title, subtitle } = message
  return [title, subtitle].join(' ')
})
</script>
