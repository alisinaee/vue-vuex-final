<template>
  <div>
    <br />
    <br />

    <p>counter : {{ counter }}</p>
    <p>double counter : {{ $store.getters.doubleCounter }}</p>

    <br />
    <br />
  </div>
</template>

<script>
export default {
    computed : {
        counter() {
            return this.$store.state.counter
        }
    }
};
</script>

<style>
</style>