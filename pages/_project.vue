<template>
  <project>
    <h1>{{ this.title }}</h1>
    <p>{{ this.description }}</p>
    <p>project last updated: {{ formatDate(project.updatedAt) }}</p>

    <nuxt-content :document="project" />
  </project>
</template>