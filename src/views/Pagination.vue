<template>
  <div>
    <div class="cont-header mt-5">
      <div class="overly h-100 d-flex align-items-center text-center">
        <h2 class="text-center w-100">{{$t("Movies")}}</h2>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row  mt-3 ">
        <div class="col-md-4 mb-3" v-for="(data,key) in pagination" :key="key">
          <div
            class="position-relative"
            :style="{
              height: '280px',
              'background-position': 'center',
              'background-size': 'cover',
              'background-image': 'url(https://image.tmdb.org/t/p/w500'+data.poster_path+')'
            }"
          >
            <div
              class="position-absolute p-3 d-flex flex-column align-items-start justify-content-end"
              style="background: linear-gradient(to bottom, transparent, rgba(0,0,0,1)); top:0; bottom:0; left:0; right:0;"
            >
              <a
                class="text-white p-1 px-2 mb-2"
                style="background-color: #272E69;"
              >
                <small>{{data.media_type}}</small>
              </a>
              <h3 class="h6">
                <a
                  class="text-white"
                  style="line-height:
                        1.6;"
                >{{data.overview.slice(0,50)}}</a>
              </h3>
              <div class="mt-2">
                <a class="px-2 text-white mx-2 border-fix"><small>{{data.original_name?data.original_name:data.original_title}}</small></a>
              </div>
            </div>
          </div>
        </div>

        
        <div class="col-md-12 text-center mb-2" v-if="spinner" >
            <div class="spinner-border text-light" role="status">
  <span class="sr-only">{{$t("Loading")}}...</span>
</div>
        </div>
      </div>
      <nav aria-label="Page navigation example" class="mx-auto  text-center">
        <ul class="pagination mx-auto text-center">
          <li class="page-item">
            <a class="page-link" @click="prev()" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li
            class="page-item "
            v-for="item in pages"
            @click="load(item)"
            :key="item"
            :class="{ 'active': item == pageNumber ? true : false }"
          >
            <a class="page-link">{{ item }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="next()" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  created() {},
  data() {
    return {
      s: "",
      pageNumber: 1,
      pages: [1, 2, 3, 4, 5, 6]
    };
  },
  props: {},
  mounted() {
    this.$store.dispatch('pagination',this.pageNumber);

  },
  computed:{
    pagination(){
        return this.$store.getters.pagination;

    },spinner(){
        return this.$store.getters.spinner;

    }
  },
  methods: {
    prev() {
        this.pageNumber=this.pageNumber-1;
        if(this.pageNumber<=1){
            this.pageNumber=1;

        }
        this.$store.dispatch('pagination',this.pageNumber);

    },
    next() {
        this.pageNumber=1+this.pageNumber;
        this.$store.dispatch('pagination',this.pageNumber);

    },
    load(page) {this.pageNumber=page;
        this.$store.dispatch('pagination',this.pageNumber);
    }
  }
};
</script>
<style lang="scss" scoped>
    .page-link{
        cursor: pointer;
    }
    
</style>
