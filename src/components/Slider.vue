
<template>
  <div class="container">
<carousel v-if="dir=='rtl'?true:false" :loop="true" :perPageCustom="[[500,1],[768, 3], [1024, 4]]" :rtl="true">
  <slide class="rounded"  v-for="trend in data" :key="trend.title">
        <div class="mx-1 rounded"  >
            <div class="position-relative" :style="{'height': '280px',  'background-position': 'center',
              'background-size':'cover'
              ,'background-image':'url(https://image.tmdb.org/t/p/w500'+trend.poster_path+')'}">

                <a class="position-absolute px-3 py-2" style="z-index: 10; top:20px; right:20px; background-color:#fff ; color:#000;border-radius:5px;">
                    <small>{{trend.media_type}}</small>
                </a>
                <div class="position-absolute p-3 d-flex flex-column justify-content-end" style="background: linear-gradient(to bottom, transparent, rgba(0,0,0,1)); top:0; bottom:0; left:0; right:0;">
                    <h3 class="h6"><a class="text-white" style="line-height: 1.6;">{{trend.title}}</a></h3>
                </div>
            </div>
        </div>

  </slide>
</carousel>
       
<carousel  v-if="dir=='ltr'?true:false" :loop="true" :perPageCustom="[[500,1],[768, 3], [1024, 4]]" :rtl="false">
  <slide class="rounded"  v-for="trend in data" :key="trend.title">
        <div class="mx-1 rounded"  >
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

  </slide>
</carousel>
 
  
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Slider',
  components: {
    Carousel, Slide
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
  computed: {
    dir(){
             return this.$store.getters.dir;

  },data(){
              return this.$store.getters.gettersTrending;

  }}
}
</script>

<style lang="scss" scoped>
.VueCarousel-dot--active{
background-color: green !important;
}
</style>

