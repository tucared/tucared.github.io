export default {
    modules: ['@nuxt/content'],
    target: 'static', // default is 'server'
    css: ['~/assets/css/main.css'],
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            }
        ]
    }
}