<template>
  <section
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
        v-for="section of sections"
        :key="section.slug"
      >
        <div class="hover:text-secondary">
          <NuxtLink :to="`${section.slug}`">{{
            section.landingTitle.toUpperCase()
          }}</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const sections = await $content("sections", params.slug)
      .only(["landingTitle", "slug"])
      .fetch();
    return { sections };
  },
};
</script>