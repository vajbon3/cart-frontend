import {createStore} from "vuex";
import api from "@/services/api";

const store = createStore({
    state() {
        return {
            user: JSON.parse(localStorage.getItem('user')),
            token: localStorage.getItem('token'),
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        }
    },
    actions: {
        login({commit}, {email, password}) {
            return api.post('/login',{email, password})
                .then(response => {
                   commit('setUser', response.data.user);
                   commit('setToken', response.data.token);
                   return response;
                })
                .catch(error => {
                    throw new Error(error.response.data.message);
                });
        }
    },
    getters: {
        isAuthenticated(state) {
            return !!state.user;
        },
        getUser(state) {
            return state.user;
        },
        getToken(state) {
            return state.token;
        }
    }
});

export default store;