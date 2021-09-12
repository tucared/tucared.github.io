export default {
    modules: ['@nuxt/content'],
    buildModules: ['@nuxtjs/tailwindcss'],
    target: 'static', // default is 'server'
    // To be deleted
    // css: ['~/assets/css/main.css'],
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            }
        ]
    }
}