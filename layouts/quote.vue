<template>
  <div class="slidev-layout quote h-full">
    <div class="flex flex-col h-full items-center justify-center">
      <blockquote class="text-3xl">
        <slot></slot>
      </blockquote>
    </div>
  </div>
</template>

<style>
.quote blockquote {
  padding: 0 5em;
}
.quote blockquote > i {
  float: left;
}
.quote blockquote::before {
  content: '❝';
  font-size: 2rem;
}
.quote blockquote::after {
  content: '❞';
  display: block;
  font-size: 2rem;
  text-align: right;
}
</style>
