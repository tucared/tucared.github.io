<template>
  <div>
    <h1>{{ project.title }}</h1>
    <img :src="project.img" :alt="this.alt" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const [project] = await $content("projects", { deep: true })
        .where({ slug: params.project })
        .only(["title", "img", "alt"])
        .fetch();

      return { project };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Project could not be found",
      });
    }
  },
};
</script>