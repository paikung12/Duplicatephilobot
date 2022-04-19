import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1cfacf09 = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _3241bb0b = () => interopDefault(import('../pages/accountbackup.vue' /* webpackChunkName: "pages/accountbackup" */))
const _cc46ddd2 = () => interopDefault(import('../pages/cashout.vue' /* webpackChunkName: "pages/cashout" */))
const _fdcadefe = () => interopDefault(import('../pages/detailea.vue' /* webpackChunkName: "pages/detailea" */))
const _37e135f0 = () => interopDefault(import('../pages/ea.vue' /* webpackChunkName: "pages/ea" */))
const _0354c420 = () => interopDefault(import('../pages/history.vue' /* webpackChunkName: "pages/history" */))
const _290839f6 = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _1a9ccbd7 = () => interopDefault(import('../pages/index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _7aa59936 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _5e134c44 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _5bb0a4f0 = () => interopDefault(import('../pages/redeem.vue' /* webpackChunkName: "pages/redeem" */))
const _2ebf15c6 = () => interopDefault(import('../pages/auth/forgot.vue' /* webpackChunkName: "pages/auth/forgot" */))
const _513b1e96 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _77a9e26f = () => interopDefault(import('../pages/auth/login copy.vue' /* webpackChunkName: "pages/auth/login copy" */))
const _a5c52af4 = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _3055e97c = () => interopDefault(import('../pages/auth/reset.vue' /* webpackChunkName: "pages/auth/reset" */))
const _841a7faa = () => interopDefault(import('../pages/auth/verified.vue' /* webpackChunkName: "pages/auth/verified" */))
const _0361201c = () => interopDefault(import('../pages/auth/verify.vue' /* webpackChunkName: "pages/auth/verify" */))
const _09505f31 = () => interopDefault(import('../pages/home/about.vue' /* webpackChunkName: "pages/home/about" */))
const _e01bd0c4 = () => interopDefault(import('../pages/home/contract.vue' /* webpackChunkName: "pages/home/contract" */))
const _6c25f42e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/canabit_frontend/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _1cfacf09,
    name: "account"
  }, {
    path: "/accountbackup",
    component: _3241bb0b,
    name: "accountbackup"
  }, {
    path: "/cashout",
    component: _cc46ddd2,
    name: "cashout"
  }, {
    path: "/detailea",
    component: _fdcadefe,
    name: "detailea"
  }, {
    path: "/ea",
    component: _37e135f0,
    name: "ea"
  }, {
    path: "/history",
    component: _0354c420,
    name: "history"
  }, {
    path: "/home",
    component: _290839f6,
    name: "home"
  }, {
    path: "/index%20copy",
    component: _1a9ccbd7,
    name: "index copy"
  }, {
    path: "/inspire",
    component: _7aa59936,
    name: "inspire"
  }, {
    path: "/logout",
    component: _5e134c44,
    name: "logout"
  }, {
    path: "/redeem",
    component: _5bb0a4f0,
    name: "redeem"
  }, {
    path: "/auth/forgot",
    component: _2ebf15c6,
    name: "auth-forgot"
  }, {
    path: "/auth/login",
    component: _513b1e96,
    name: "auth-login"
  }, {
    path: "/auth/login%20copy",
    component: _77a9e26f,
    name: "auth-login copy"
  }, {
    path: "/auth/register",
    component: _a5c52af4,
    name: "auth-register"
  }, {
    path: "/auth/reset",
    component: _3055e97c,
    name: "auth-reset"
  }, {
    path: "/auth/verified",
    component: _841a7faa,
    name: "auth-verified"
  }, {
    path: "/auth/verify",
    component: _0361201c,
    name: "auth-verify"
  }, {
    path: "/home/about",
    component: _09505f31,
    name: "home-about"
  }, {
    path: "/home/contract",
    component: _e01bd0c4,
    name: "home-contract"
  }, {
    path: "/",
    component: _6c25f42e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
