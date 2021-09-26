
<template>
  <div>
    <h1>{{ section.sectionTitle }}</h1>
    <ul>
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="`${section.slug}/${project.slug}`">
          <div>
            <h2>{{ project.title }}</h2>
            <p>{{ project.shortDescription }}</p>
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
        .only(["title", "shortDescription", "slug"])
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