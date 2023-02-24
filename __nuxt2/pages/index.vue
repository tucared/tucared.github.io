<template>
  <theme
    class="
      h-screen
      min-w-full
      container
      flex
      items-center
      justify-center
      py-20
      px-20
      bg-terciary
    "
  >
    <div id="maintenance-banner" class="absolute h-32 top-0 items-center flex">
      <h1 class="text-primary text-3xl font-semibold uppercase">
        Website in maintenance
      </h1>
    </div>
    <div id="logo-container">
      <nuxt-link
        tag="img"
        :src="require('~/assets/img/logo.png')"
        class="object-scale-down object-center h-96"
        to="/projects"
      >
      </nuxt-link>
    </div>
  </theme>
</template>

<script>
export default {
  head() {
    return {
      title: "Clarissa Aburachid",
    };
  },
  async asyncData({ $content }) {
    const themes = await $content().sortBy("landingOrder").fetch();
    return { themes };
  },
};
</script>