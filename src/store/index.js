import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        trending: [],
        loading: true,
        loadMore: [],
        scrolling: [],
        pagination:[],
        dir: '',
        spinner: true
    },
    mutations: {
        mutationsTrending(state, payload) {
            state.trending = payload;
        },
        dire(state, payload) {
            state.dir = payload;
        },
        loading(state, payload) {
            state.loading = payload
        },
        loadMore(state, payload) {
            state.loadMore = [...state.loadMore, ...payload]

        },
        scrolling(state, payload) {
            state.scrolling = [...state.scrolling, ...payload]

        },pagination(state, payload) {
            state.pagination = payload;

        },
        spinner(state, payload) {
            state.spinner = payload;
        }
    },
    getters: {
        gettersTrending: (state) => {
            return state.trending;
        },
        dir: (state) => {
            return state.dir
        },
        loading(state) {
            return state.loading
        },
        loadMore(state) {
            return state.loadMore
        },
        scrolling(state) {
            return state.scrolling
        },
        spinner(state) {
            return state.spinner;
        },pagination(state){
            
            return state.pagination;

        }
    },
    actions: {
        direaction({ commit }, dir) {
            commit('dire', dir);

        },
        load({
            commit
        }) {
            commit('loading', true);

        },
        trending({
            commit
        }, page) {
            axios
                .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
                .then((res) => {
                    commit('mutationsTrending', res.data.results);
                    commit('loading', false);

                }).catch(err => {
                    console.log(err)
                });
        },

        loadMore({
            commit
        }, page) {
            commit('spinner', true);
            axios
                .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
                .then((res) => {
                    commit('loadMore', res.data.results);
                    commit('loading', false);
                    commit('spinner', false);

                }).catch(err => {
                    console.log(err)
                });
        },
        scrolling({
            commit
        }, page) {
            commit('spinner', true);
            axios
                .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
                .then((res) => {
                    commit('scrolling', res.data.results);
                    commit('loading', false);
                    commit('spinner', false);

                }).catch(err => {
                    console.log(err)
                });
        },
        pagination({
            commit
        }, page) {
            commit('spinner', true);
            axios
                .get(`https://api.themoviedb.org/3/trending/all/day?api_key=25ad1aa7c58bc7f63b597e2504bb2737&page=${page}`)
                .then((res) => {
                    commit('pagination', res.data.results);
                    commit('loading', false);
                    commit('spinner', false);

                }).catch(err => {
                    console.log(err)
                });
        },
    }
})