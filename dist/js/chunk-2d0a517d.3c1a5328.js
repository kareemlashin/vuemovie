(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a517d"],{"08dc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"cont-header mt-5"},[s("div",{staticClass:"overly h-100 d-flex align-items-center text-center"},[s("h2",{staticClass:"text-center w-100"},[t._v(t._s(t.$t("Movies")))])])]),s("div",{staticClass:"container  mt-3 mb-5"},[s("div",{staticClass:"row"},[t._l(t.loadMore,(function(e,a){return s("div",{key:e.original_title+""+a,staticClass:"col-md-4 mb-3"},[s("div",{staticClass:"position-relative",style:{height:"280px","background-position":"center","background-size":"cover","background-image":"url(https://image.tmdb.org/t/p/w500"+e.poster_path+")"}},[s("div",{staticClass:"position-absolute p-3 d-flex flex-column align-items-start justify-content-end",staticStyle:{background:"linear-gradient(to bottom, transparent, rgba(0,0,0,1))",top:"0",bottom:"0",left:"0",right:"0"}},[s("a",{staticClass:"text-white p-1 px-2 mb-2",staticStyle:{"background-color":"#272E69"}},[s("small",[t._v(t._s(e.media_type))])]),s("h3",{staticClass:"h6"},[s("a",{staticClass:"text-white",staticStyle:{}},[t._v(t._s(e.overview.slice(0,50)))])]),s("div",{staticClass:"mt-2"},[s("a",{staticClass:"px-2 text-white mx-2 border-fix"},[s("small",[t._v(t._s(e.original_name?e.original_name:e.original_title))])])])])])])})),t.spinner?s("div",{staticClass:"col-md-12 text-center mb-2"},[s("div",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v(t._s(t.$t("Loading"))+"...")])])]):t._e()],2),s("div",{staticClass:"text-center"},[s("button",{staticClass:"button py-2 rounded-pill px-5",on:{click:function(e){return t.load()}}},[t._v(t._s(t.$t("loadMore")))])])])])},i=[],o={name:"LoadMore",created:function(){},data:function(){return{pageNumber:1}},props:{},methods:{load:function(){this.pageNumber=this.pageNumber+1,this.$store.dispatch("loadMore",this.pageNumber)}},mounted:function(){this.$store.dispatch("loadMore",this.pageNumber)},computed:{loadMore:function(){return this.$store.getters.loadMore},spinner:function(){return this.$store.getters.spinner}}},n=o,r=s("2877"),l=Object(r["a"])(n,a,i,!1,null,"239a2afc",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0a517d.3c1a5328.js.map