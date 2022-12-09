<template>
  <section>
    <h1 v-if="show">{{ message.title }}</h1>
    <div v-html="message.subtitle"></div>
    <div>{{ tweeting }}</div>
  </section>
</template>
<script>
export default {
  data: () => ({
    show: true,
    message: {
      title: 'Options API',
      subtitle: 'it was <strong>great</strong>!'
    }
  }),
  computed: {
    tweeting() {
      const { title, subtitle } = this.message
      return [title, subtitle].join(' ')
    }
  }
}
</script>
