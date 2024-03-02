// import Vue from 'vue'
import { createStore } from 'vuex';
import axios from 'axios';

// Vue.use(VueQuillEditor)
const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Accept': "application/json",
    "Content-Type": "application/json",
  }
});
let user = localStorage.getItem('user');
if (!user) {
  user = {
    userId: -1,
    token: '',
  };
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userId: -1,
      token: '',
      firstname: this.$user.firstname,
      lastname: this.$user.lastname,
      email: this.$user.email,
      phone: this.$user.phone,
      password: this.$user.password,
      confirmPassword: this.$user.confirmPassword,
      roleId: this.$user.roleId,
      createdAt: this.$user.createdAt

    };
  }
};
// Vue.use(Vuex)

export default createStore({
  state: {
    status: '',
    user: {
      id: -1,
      token: '',
    },
    instance: instance,
    users: [],

  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    logUser: function (state, user) {
      instance.defaults.headers.common['Authorization'] = user.token;
      localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },

  },
  actions: {
    createMessage: ({ commit }, message) => {
      commit('setStatus', 'loading');
      return instance
        .post('/messages', message)
        .then((response) => {
          commit('setStatus', 'success');
          return response;
        })
        .catch((error) => {
          commit('setStatus', 'error');
          return error;
        });
    },
    createAccount: ({ commit }, data) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance
          .post('auth/register', data)
          .then((response) => {
            commit('setStatus', 'success');
            resolve(response);
            console.log(response);
          })
          .catch((error) => {
            commit('setStatus', 'msgError');
            reject(error);
          });

      });
    },
    login: ({ commit }, user) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.post('auth/login', user)
          .then((response) => {
            commit('setStatus', 'success');
            commit('logUser', response.data);
            resolve(response);
          }).catch((error) => {
            commit('setStatus', 'error');
            reject(error);
            console.log(error);
          });
      });
    },
  },
  modules: {

  }
});