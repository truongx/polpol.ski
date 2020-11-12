<template>
  <button role="button" aria-label="Toggle dark/light" @click.prevent="toggleTheme" class="toggle-theme">
      <span v-if="darkTheme">🙄</span>
      <span v-else>🤬</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
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