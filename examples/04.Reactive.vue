<template>
  <section>
    <div :title="message" @click="change()">
      {{ message }}
    </div>
  </section>
</template>

<script setup>
let message = $ref('hello!')
const change = () => {
  message = message.split('').reverse().join('')
}
</script>
