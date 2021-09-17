import router from "vue-router"
import Vue from "vue"
import routes from "./route.js"
Vue.use(router);
const Router = new router({
    routes,
    mode: 'history'
})

export default Router