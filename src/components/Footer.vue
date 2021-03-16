
<template>
  <div>
<div>
   <div class="container  my-5">

    <div class="border-bottom mb-3 pb-3 px-2 d-flex justify-content-between">
        <div class="d-flex align-items-center">
        
<i class="fas fa-film movie-i"></i>
            <a routerLink="/home/listMovies" style=" font-size: 20px;" class="text-capitalize font-weight-bold px-2 mb-0 text-white">{{$t("listMovie")}}</a>
        </div>
        <router-link to="/loadMore" class="text-white">{{$t('seeMore')}}</router-link>
    </div>

    <div class="row">

        <div class="col-md-4 p-3" v-for="(trend,key) in trending.slice(5,8)" :key="trend.original_title+'-'+key" >
            <div class="position-relative" :style="{'height': '280px',  'background-position': 'center',
              'background-size':'cover'
              ,'background-image':'url(https://image.tmdb.org/t/p/w500'+trend.poster_path+')'}">

                <a class="position-absolute px-3 py-2" style="z-index: 10; top:20px; right:20px; background-color:#fff ; color:#000;border-radius:5px;">
                    <small>{{trend.media_type}}</small>
                </a>
                <div class="position-absolute p-3 d-flex flex-column justify-content-end" style="background: linear-gradient(to bottom, transparent, rgba(0,0,0,1)); top:0; bottom:0; left:0; right:0;">
                    <h3 class="h6"><a class="text-white" style="line-height: 1.6;">{{trend.original_name?trend.original_name:trend.original_title}}</a></h3>
                </div>
            </div>
        </div>

    </div>
</div>
  </div>
  
  </div>
  
</template>

<script>
export default {
  name: 'Footer',
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
  computed: {
    trending(){
          return this.$store.getters.gettersTrending;

  }}
  
}
</script>

<style lang="scss" scoped>

</style>

