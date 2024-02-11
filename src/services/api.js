import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyjson.com/"
});

export const getProductListAPI = () => 
    instance({
        method: 'GET',
        url: "product"
    });
const api = {
    getProductListAPI
}
export default api;
