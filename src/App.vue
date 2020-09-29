<template>
  <div class="app container">
    <child1-cmp></child1-cmp>
    <child2-cmp></child2-cmp>
    <br>
    <br>
    <child3-cmp></child3-cmp>
  </div>
</template>

<script>
import child1 from "./components/child1";
import child2 from "./components/child2";
import child3 from "./components/child3";

export default {
  components: {
    "child1-cmp": child1,
    "child2-cmp": child2,
    "child3-cmp": child3,
  },
};
</script>

<style>
</style>
