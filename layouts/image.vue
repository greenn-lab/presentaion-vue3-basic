<template>
  <div class="slidev-layout image h-full">
    <div class="flex flex-col h-full items-center justify-center">
      <slot></slot>
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
