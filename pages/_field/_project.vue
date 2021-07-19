<template>
  <div>
    <h1>{{ this.title }}</h1>
    <p>{{ this.description }}</p>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params, error}) {
    try {
      const [project] = await $content('projects', params.slug)
        .where({ slug: params.project })
        .fetch()

      const title = project.title
      const description = project.description
      return { title, description }
    }
    catch (err) {
      error({
        statusCode: 404,
        message: "Project could not be found",
      });
    }
  }}
</script>