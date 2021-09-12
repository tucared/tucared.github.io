
<template>
  <div>
    <h1>YiooYo</h1>
    <ul>
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="`${field}/${project.slug}`">
          <div>
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
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
      const field = params.field;
      const projects = await $content("projects")
        .where({ category: field })
        .only(["title", "description", "slug"])
        .sortBy("createdAt", "asc")
        .fetch();

      return { projects, field };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
};
</script>