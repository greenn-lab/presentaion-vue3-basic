<template>
  <h1>!</h1>
  <div v-if="show">
    <span v-html="message.title"></span>
    <span>{{ message.subtitle }}</span>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true,
    message: {
      title: 'This is <kbd>Options</kbd>',
      subtitle: ', be <strong>great</strong>!'
    }
  })
}
</script>
