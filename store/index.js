import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First Post",
                previewText: "everything is awesome!!!",
                thumbnail: "http://lorempixel.com/640/480/sports"
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "everything is awesome!!!",
                thumbnail: "http://lorempixel.com/640/480/sports"
              }
            ]);
            resolve();
          }, 1500);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
