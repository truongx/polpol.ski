<template>
  <span class="beep" @click='toggleTheme'>{{ darkTheme ? text : beeped }}</span>
</template>

<script>
export default {
  props: {
      text: {
          type: String,
      }
  },
  computed: {
    beeped() {
      return this.text[0] + "⚡🤬☠️" + this.text[this.text.length - 1]
    },
    darkTheme() {
      return this.$store.state.darkTheme
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit('toggleTheme')
      if (this.$disqus.reset) setTimeout(this.$disqus.reset, 500);
    }
  }
}
</script>

<style lang="scss">
.beep {
  cursor: pointer;
}
</style>