import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _043ac2ff = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _6fc6b04e = () => interopDefault(import('..\\pages\\_section\\index.vue' /* webpackChunkName: "pages/_section/index" */))
const _5e6210ba = () => interopDefault(import('..\\pages\\_section\\_project.vue' /* webpackChunkName: "pages/_section/_project" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _043ac2ff,
    name: "index"
  }, {
    path: "/:section",
    component: _6fc6b04e,
    name: "section"
  }, {
    path: "/:section/:project",
    component: _5e6210ba,
    name: "section-project"
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
