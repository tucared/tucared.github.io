
<template>
  <div
    class="min-w-full h-full min-h-screen p-10 bg-terciary overscroll-contain"
  >
    <div>
      <h1 class="text-xl p-10 font-bold justify-start">Projects</h1>
    </div>
    <div>
      <ul class="columns-3xs">
        <li
          class="p-3 w-full break-inside-avoid"
          v-for="project of projects"
          :key="project.slug"
        >
          <NuxtLink :to="`${project.slug}`">
            <div>
              <img v-if="project.img" class="object-cover" :src="project.img" />
              <h2>{{ project.title }}</h2>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      // Will be used for filtering later
      const [theme] = await $content(params.slug)
        .where({ slug: params.theme })
        .only(["title", "slug"])
        .fetch();

      const projects = await $content()
        .only(["title", "img", "slug"])
        .sortBy("createdAt", "asc")
        .fetch();

      return { theme, projects };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Theme could not be found",
      });
    }
  },
};
</script>