
<template>
  <div  :dir="dir">
   <Header />
   <Trending/>
   <Slider />
  </div>
</template>

<script>
  import Header from'./../components/Header.vue';
  import Trending from'./../components/Trending.vue';
  import Slider from'./../components/Slider.vue';
  
export default {
  name: 'Base',
  components: {
    Header,Trending,Slider
  },
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
  mounted () {
  },
  computed: {
    dir(){
             return this.$store.getters.dir;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

