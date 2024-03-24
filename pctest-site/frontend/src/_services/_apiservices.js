import Axios from './store/index.js';

export default {
    get: function (url) {
        return Axios.get(url);
    },
    post: function (url, data) {
        return Axios.post(url, data);
    },
}