import Vuex from 'vuex'
import axios, { NuxtAxiosInstance as $axios } from '@nuxtjs/axios'

// create function instead of object -> should be callable by nuxt, if object -> all users would get same instance
// normal vuex store
const createStore = () => {
  return new Vuex.Store({
    // starting state
    state: {
      loadedPosts: [],
      token: null
    },
    // receive state and payload
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        )

        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return this.$axios
          .get(process.env.baseUrl + '/posts.json')
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              // ... pulls out all properties
              postsArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch(error => context.error(error))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      }
    }
  })
}

export default createStore
