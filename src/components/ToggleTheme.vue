<template>
  <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme" class="toggle-theme">
      <span v-if="darkTheme">🙄</span>
      <span v-else>🤬</span>
  </button>
</template>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    }
  },
  methods: {
    toggleTheme() {
      this.$store.commit('toggleTheme')
      if (this.$disqus.reset) setTimeout(this.$disqus.reset, 500);
    }
  },
  mounted() {
    this.$store.commit('initTheme')
  }
}
</script>

<style lang="scss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: var(--body-color);
  cursor: pointer;

  &:hover {
    opacity: .8
  }
  &:focus {
    outline: none;
  }
}
</style>