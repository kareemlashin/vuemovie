<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<script>

export default {

   computed: {

    load() {

      return this.$store.getters.loading;
    },
  }
}
</script>

<style lang="scss">
  @import './assets/scss/index.scss';


</style>
