
<template>
  <div>
   <div class="header__home">
    <div class="overly">
        <div class="container h-100">

            <div class="d-flex align-items-center h-100 ">
                <div>

                    <h2> {{$t("title")}}</h2>
                    <button class="header-button rounded-pill px-4 py-1" @click="seeMore()">{{$t("seeMore")}}</button>
                </div>
            </div>

        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   seeMore(){
     this.$router.push("Scroll");
   }
  },
}
</script>

<style lang="scss" scoped>

</style>

