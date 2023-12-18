import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
Vue.prototype.$appInfo = { name: "MOBA", slogan: "Technology for Business", description: "Nada..", version: "1.0.0", autor: "MOBA - TECHNOLOGY FOR BUSINESS", 
links:[
{
  name:"facebook",
  icon:"mdi-facebook",
  link:"https://www.facebook.com/moba.tic.ec",
  info:"Interactua con nuestas publicaciones sociales.",
},
{
  name:"twitter",
  icon:"mdi-twitter",
  link:"",
  info:"",
},
{
  name:"linkedin",
  icon:"mdi-linkedin",
  link:"",
  info:"",
},
{
  name:"instagram",
  icon:"mdi-instagram",
  link:"https://www.instagram.com/moba.tic.ec/",
  info:"",
},
]
,
keywords: ["services", "world", "manager", "moba", "business"] }
Vue.prototype.$func = { openDialog: null, name: null }
Vue.prototype.$function = { }
Vue.prototype.$user = { id: null }
Vue.prototype.$salesman = { name: 'Don Code', contact: '967267405' }
Vue.prototype.$color = {
  primary: '#40cfff',
  secondary: '#1a1d48',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107',
  gray: '#b9b9b9'
}


Vue.use(VueRouter)
Vue.use(VueMeta)

Vue.prototype.$genDate = () => {
  var today = new Date();
  return (today.getDate() +
    "/" +
    (today.getMonth() + 1) +
    "/" +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds() +
    ":" + today.getMilliseconds())
}
const routes = [
  /*      {
        path: '/',
        name: 'Inicio',
        redirect: '/Inicio'
      },  */
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { auth: false }
  },
  {
    path: '/schedule',
    name: 'Agenda',
    component: () => import(/* webpackChunkName: "Schedule" */ '../views/Schedule.vue'),
    meta: { auth: false }
  },

  {
    path: "*",
    name: '*',
    redirect: '/'
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  if (to.meta.auth === undefined) { return next(); }

  const authRoute = (to.meta.auth);
  if (authRoute) {
    if (!Vue.auth.isAuth()) {
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else next();
  } else {
    if (Vue.auth.isAuth()) {
      next({ path: '/information' })
    } else next();
  }
  next();
});


export default router
