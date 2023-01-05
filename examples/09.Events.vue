<template>
  <div @click="color">
    <div @click="color">
      <a @click="color">Core!</a>
    </div>
  </div>
</template>

<script setup>
const color = ({currentTarget}) =>
  currentTarget.style.backgroundColor = generateRGBColor()

const generateRGBColor = () => {
  const hex = () => Math.floor(Math.random() * 16).toString(16)
  return `#${hex() + hex() + hex()}`
}

</script>
<style>
div, div>a {
  display: block;
  padding: 2rem;
}
</style>
