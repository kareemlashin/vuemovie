<template>
  <div :dir="dirc" class="bg-base">
    <Loading v-if="load" />

<Nav />
<router-view />
   <Footer />

  </div>
</template>

<script>
// @ is an alias to /src
import Nav from'./../components/Nav.vue'
import Loading from'./../components/Loading.vue'
  import Footer from'./../components/Footer.vue';

export default {
  name: 'Home',
 components: {
   Nav,Loading,Footer
 },
  data() {
    return {
      dir:''
    }
  },
  mounted(){
    this.$store.dispatch('load');
                       this.$store.dispatch("trending",1);

    this.dir=localStorage.getItem('dir')||'ltr';
      this.$i18n.locale = this.dir=='ltr'?'en':'ar';
         this.$store.dispatch("direaction",this.dir);

   /* 
   this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchEgypt");
    this.$store.dispatch("fetchWorld");*/
  },computed: {
      
    load() {
      return this.$store.getters.loading;
    },dirc() {
      return this.$store.getters.dir;
    },
  }
}
</script>
