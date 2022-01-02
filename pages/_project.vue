<template>
  <theme class="h-screen min-w-full container flex bg-secondary">
    <div>
      <h1>{{ project.title }}</h1>
      <img :src="project.img" :alt="this.alt" />
    </div>
  </theme>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const [project] = await $content()
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