<template>
  <div class="slidev-layout center h-full">
    <div class="flex flex-col h-full items-center justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<style>
ul {
  @apply text-3xl;
  list-style: disc!important;
}

li:first-child {
  @apply mt-10;
}
li {
  line-height: 2em;
}
</style>
