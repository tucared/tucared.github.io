const main_base_URL = 'https://clarissa.studio';
import getRoutes from "./utils/getRoutes";

export default {
    modules: [
        '@nuxt/content',
        '@nuxtjs/sitemap'
    ],
    buildModules: ['@nuxtjs/tailwindcss'],
    target: 'static',
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            }
        ]
    },
    build: {},
    env: {
        main_base_URL
    },
    sitemap: {
        hostname: main_base_URL,
        routes() {
            return getRoutes();
        },
    }
}