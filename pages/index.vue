<script setup>
// const { data } = await useAsyncData('projects',
//   () => queryContent('site')
//     .only(['category'])
//     .sort("category")
//     .find()
// )

// export default {
//   head() {
//     return {
//       title: "Clarissa Aburachid",
//     };
//   },
//   async asyncData({ $content }) {
//     const themes = await $content().sortBy("landingOrder").fetch();
//     return { themes };
//   },
// };
</script>

<template>
  <div class="
                      h-screen
                      min-w-full
                      container
                          flex
                          items-center
                              justify-center
                              py-20
                              px-20
                              bg-terciary
                            ">
    <div id="maintenance-banner" class="absolute h-32 top-0 items-center flex">
      <h1 class="text-primary text-3xl font-semibold uppercase">
        Website in maintenance
      </h1>
    </div>
    <div id="logo-container">
      <NuxtLink to="/projects"> <img class="object-scale-down object-center h-96" src="/img/logo.png" alt="Logo" />
      </NuxtLink>
    </div>
  </div>
  <!-- <pre>{{ data }}</pre> -->
</template>
