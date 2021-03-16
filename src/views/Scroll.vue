<template>
  <div>
    <div class="cont-header mt-5">
      <div class="overly h-100 d-flex align-items-center text-center">
        <h2 class="text-center w-100">{{$t("Movies")}}</h2>
      </div>
    </div>
    <div
      class="search-results box-scrol container mb-5 mt-3"
      id="scroll"
      v-on:scroll="onMousewheel"
    >
      <div class="row" id="all">
        <div
          class="col-md-4 mb-3"
          v-for="(loadMores, key) in scrolling"
          :key="loadMores.original_title + '' + key"
        >
          <div
            class="position-relative"
            :style="{
              height: '280px',
              'background-position': 'center',
              'background-size': 'cover',
              'background-image':
                'url(https://image.tmdb.org/t/p/w500' +
                loadMores.poster_path +
                ')'
            }"
          >
            <div
              class="position-absolute p-3 d-flex flex-column align-items-start justify-content-end"
              style="
                background: linear-gradient(
                  to bottom,
                  transparent,
                  rgba(0, 0, 0, 1)
                );
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
              "
            >
              <a
                class="text-white p-1 px-2 mb-2"
                style="background-color: #272e69"
              >
                <small>{{ loadMores.media_type }}</small>
              </a>
              <h3 class="h6">
                <a class="text-white" style="line-height: 1.6">{{
                  loadMores.overview.slice(0, 50)
                }}</a>
              </h3>
              <div class="mt-2">
                <a class="px-2 text-white mx-2 border-fix"
                  ><small>{{
                    loadMores.original_name
                      ? loadMores.original_name
                      : loadMores.original_title
                  }}</small></a
                >
              </div>
            </div>
          </div>
        </div>
        
    <div class="col-md-12 text-center mb-2" v-if="spinner">
      <div class="spinner-border text-light" role="status">
        <span class="sr-only">{{$t("Loading")}}...</span>
      </div>
    </div>
    
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Scroll",
  created() {},
  data() {
    return {
      expression: "",
      pageNumber: 1
    };
  },
  mounted() {
    this.$store.dispatch("scrolling", this.pageNumber);
  },
  computed: {
    scrolling() {
      return this.$store.getters.scrolling;
    },
    spinner() {
      return this.$store.getters.spinner;
    }
  },
  props: {},
  methods: {
    onMousewheel() {
      var layout = document.getElementById("scroll");
      var pannel2 = document.getElementById("all");
      let allH = layout.scrollTop;
      let allH3 = pannel2.scrollHeight;
      if (allH >= allH3 - 700) {
        this.pageNumber = 1 + this.pageNumber;

        this.$store.dispatch("scrolling", this.pageNumber);
      }
    },

    load() {
      this.expression = true;
      this.pageNumber = 1 + this.pageNumber;
    }
  }
};
</script>

<style lang="scss" scoped></style>
