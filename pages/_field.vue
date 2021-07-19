
<template>
  <div>
    <h1>{{ field.id }}</h1>
    <ul>
      <li v-for="project of projects" :key="project.slug">
        <NuxtLink :to="`${project.slug}`">
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
  async asyncData({ $content, params,error }) {
    try {
      const [field] = await $content({ deep: true })
        .where({ dir: `/${params.slug}` })
        .fetch();
      const projects = await $content("projects")
        .where({ category: "archi" })
        .only(["title", "description", "slug"])
        .sortBy("createdAt", "asc")
        .fetch();

      return { field, projects }
    } catch(err) { 
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  }
};
</script>