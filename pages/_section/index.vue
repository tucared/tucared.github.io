
<template>
  <div class="h-screen min-w-full container flex flex-col p-10 bg-terciary">
    <h1 class="text-xl p-10 font-bold justify-start">
      {{ section.sectionTitle }}
    </h1>
    <ul>
      <li class="p-3" v-for="project of projects" :key="project.slug">
        <NuxtLink :to="`${section.slug}/${project.slug}`">
          <div>
            <img
              v-if="project.img"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
              :src="project.img"
            />
            <h2>{{ project.title }}</h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const [section] = await $content("sections", params.slug)
        .where({ slug: params.section })
        .only(["sectionTitle", "slug"])
        .fetch();

      const projects = await $content("projects")
        .where({ section: params.section })
        .only(["title", "img", "slug"])
        .sortBy("createdAt", "asc")
        .fetch();

      return { section, projects };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Section could not be found",
      });
    }
  },
};
</script>