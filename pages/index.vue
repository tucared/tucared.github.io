<template>
  <section class="centered">
    <div id="maintenance-banner"><h1>Website in maintenance</h1></div>
    <div id="logo-container">
      <img id="logo" src="~/assets/img/logo.png" />
    </div>
    <div id="landing-links-container" v-for="field of fields" :key="field.slug">
      <div class="landing-link">
        <NuxtLink :to="`${field.slug}`">{{
          field.landing.toUpperCase()
        }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const fields = await $content("fields", params.slug).fetch();
    return { fields };
  },
};
</script>