<template>
  <span
    @mouseenter="hover = true"
    @mouseleave="hover = false">
    {{ currentOption }}
  </span>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      hover: false
    }
  },
  computed: {
    currentOption() {
      return this.options[this.index];
    }
  },
  props: {
      options: {
        type: Array,
      },
      minDelay: {
        type: Number,
        default: 5000
      },
      maxDelay: {
        type: Number,
        default: 5000
      },
      delay: {
        type: Number,
        default: null
      }
  },
  methods: {
    changeIndex() {
      if(!this.hover) {
        if(this.index + 1 == this.options.length)
          this.index = 0;
        else
          this.index++;
      }
      
      setTimeout(this.changeIndex, this.getDelay())
    },
    getDelay() {
      if(this.delay === null)
        return Math.floor(Math.random() * (this.maxDelay - this.minDelay + 1)) + this.minDelay;
      else
        return this.delay;
    }
  },
  mounted() {
    setTimeout(this.changeIndex, this.getDelay())
  }
}
</script>
