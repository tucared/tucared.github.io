const main_base_URL = 'https://clarissa.studio';

export default {
    modules: ['@nuxt/content'],
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
    build: {}
}