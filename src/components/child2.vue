<template>
  <div>
    <h3>from store state management</h3>
    <br />
    <br />
    <button class="btn btn-primary" @click="inc">INC</button>
    <br /><br />
    <button class="btn btn-primary" @click="dec">DEC</button>
  </div>
</template>

<script>
export default {
  methods: {
    inc() {
      this.$store.state.counter++;
    },
    dec() {
      this.$store.state.counter--;
    },
  },
};
</script>

<style>
</style>