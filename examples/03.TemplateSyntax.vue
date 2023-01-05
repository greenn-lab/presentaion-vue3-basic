<template>
  <section>
    <div
      v-bind:title="message"
      v-on:click="message = 'hello!'"
    >
      {{ message }}
    </div>
  </section>
</template>

<script setup>
const message = $ref('hi!')
</script>
