
<template>
  <div>
   <nav id="nav" class="navbar navbar-expand-lg navbar-light  fixed-top bg-nav shadow-base ">
    <router-link class="navbar-brand" to="/">{{$t("logo")}}</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon d-flex align-items-center justify-content-center">
      <i class="fas fa-bars"></i>
    </span>
  </button>
    <div class="collapse navbar-collapse margin-nav" id="navbarNavDropdown">
        <ul class="navbar-nav margin-nav">
            <li class="nav-item active d-flex align-items-center">
                <router-link class="nav-link py-1" to="/">{{$t("home")}} <span
                    class="sr-only py-1">(current)</span></router-link>
            </li>
            <li class="nav-item d-flex align-items-center">
                <router-link class="nav-link py-1" to="/Scroll">{{$t("movieLinks")}}</router-link>
            </li>

            <li class="nav-item d-flex align-items-center">
                <router-link class="nav-link py-1" to="/Pagination"> {{$t("listMovie")}}</router-link>
            </li>
            <li class="nav-item d-flex align-items-center">
                <router-link class="nav-link py-1" to="/loadMore">{{$t("movieNews")}} </router-link>
            </li>
            <li>
                <button class="rounded-pill px-5 mt-1 py-1" v-if="fixDir=='rtl'?false:true" @click="useLanguage('ar')">العربيه</button>
                <button class="rounded-pill px-5 mt-1 py-1" v-if="fixDir=='ltr'?false:true" @click="useLanguage('en')">English</button>

            </li>
        </ul>
    </div>
</nav>
<div :style="{'margin-top':margin+'px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  created() {

  },
  data() {
    return {
      lang:'ar',
      dir:'',
      margin:''
    }
  },
  props: {
   
  },
  mounted () {
    let x= document.getElementById('nav');
    this.margin=x.clientHeight;
  },
  methods: {
   useLanguage(lang){
     if(lang=='ar'){
    this.dir="rtl"; 
    }else{
    this.dir="ltr"; 
     }
     this.$i18n.locale = lang;

     this.lang=lang;
localStorage.setItem('dir',this.dir);
    this.$store.dispatch('direaction',this.dir);
   }
  },
  computed: {
    fixDir(){
return this.$store.getters.dir
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

