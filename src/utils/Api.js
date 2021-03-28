import axios from "axios";
const url = 'https://randomuser.me/api/';

//api call 
export default {
    ApiSearch: function () {
        return axios.get(url)
    }
}