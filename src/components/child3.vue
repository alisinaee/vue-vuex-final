<template>
  <div>
    <h3>from (Mutations) store state management</h3>
    <br>
    <br>
    <button class="btn btn-primary" @click="inc">INC</button>
    <br /><br />
    <button class="btn btn-primary" @click="dec">DEC</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations([
        'inc',
        'dec',
    ]),
  },
};
</script>

<style>
</style>