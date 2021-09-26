const main_base_URL = 'https://clarissa.studio';

import getRoutes from "./utils/getRoutes";

export default {
    modules: ['@nuxt/content'
        /*,'@nuxtjs/sitemap'*/],
    buildModules: ['@nuxtjs/tailwindcss'],
    target: 'static', // default is 'server'
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            }
        ]
    },
    build: {},
    sitemap: {
        /* NOT WORKING
        hostname: main_base_URL,
        routes() {
            return getRoutes();
        }
        */
    }
}