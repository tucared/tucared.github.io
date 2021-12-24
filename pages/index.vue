<template>
  <theme
    class="
      h-screen
      min-w-full
      container
      flex flex-col
      items-center
      justify-center
      py-20
      px-20
      bg-terciary
    "
  >
    <div id="maintenance-banner" class="flex-1 h-32 items-center flex">
      <h1 class="text-primary text-4xl lg:text-2xl font-semibold uppercase">
        Website in maintenance
      </h1>
    </div>
    <div id="logo-container" class="flex-initial">
      <img
        id="logo"
        src="~/assets/img/logo.png"
        class="object-scale-down object-center h-96"
      />
    </div>
    <div
      class="flex-1 h-32 items-center justify-center flex flex-col lg:flex-row"
    >
      <div
        id="landing-links-container"
        class="px-8 py-10 text-3xl text-primary"
        v-for="theme of themes"
        :key="theme.slug"
      >
        <div class="hover:text-secondary">
          <NuxtLink :to="`${theme.slug}`">{{
            theme.title.toUpperCase()
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </theme>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const themes = await $content().sortBy("landingOrder").fetch();
    return { themes };
  },
};
</script>