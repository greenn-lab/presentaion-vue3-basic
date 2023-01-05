<template>
  <div>
    <div v-text="say"></div><hr />
    <div v-html="say"></div><hr />
    <div>{{ say }}</div><hr />
    <div v-pre>{{ say }}</div>
  </div>
</template>

<script setup>
const say = '<b>Hello !</b>'
</script>
