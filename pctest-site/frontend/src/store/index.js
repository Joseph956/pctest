import { createStore } from 'vuex';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
  headers: {
    'Accept': "application/json",
    "Content-Type": "application/json",
  },
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
      isAdmin: this.$user.isAdmin,
      createdAt: this.$user.createdAt
    };
  }
};
// Vue.use(Vuex)

export default createStore({
  state: {
    status: '',
    user: '',
    user: {
      userId: -1,
      token: '',
    },
    instance: instance,
    user: [],
    users: [],
    getUsers: [],
    getStatus: '',
    getUsersList: [],
    user: '',
    users: '',
    userId: '',
    token: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    createdAt:'',
    isAdmin: '',
    isLogged: false,
    userId: -1,
    roleId: -1,

  },
  getters: {
    getStatus: (state) => {
      return `${state.getUsersList}`;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isLogged = !!token; //vérifie si le token est défini ou null et renvoie true ou false
    },
    setAdmin(state, admin) {
      state.isAdmin = admin;
    },
    setStatus: function (state, status) {
      state.status = status;
    },
    setUser(state, user) {
      state.userId = user;
    },
    setRole(state, role) {
      state.roleId = role;
    },
    getUsers: function (state, users) {
      // instance.defaults.headers.common['Authorization'] = user.token;
      // localStorage.setItem('user', JSON.stringify(users));
      state.users = users;
    },
    logUser: function (state, user) {
      // instance.defaults.headers.common['Authorization'] = user.token;
      // localStorage.setItem('user', JSON.stringify(user));
      state.user = user;
    },

  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setAdmin({ commit }, admin) {
      commit("setAdmin", admin);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
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
            commit('setStatus', 'error_login');
            reject(error);
          });
      });
    },
    getUsers: ({ commit }, user) => {
      commit('setStatus', 'loading');
      return new Promise((resolve, reject) => {
        instance.get('/users', user)
          .then((response) => {
            commit('setStatus', 'success');
            commit('getUsers', response.data);
            resolve(response);
          }).catch((error) => {
            commit('setStatus', 'error');
            reject(error);
          });
      });
    },
  },
  modules: {

  }
});