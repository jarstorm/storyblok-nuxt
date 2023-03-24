<template>
  <div>These are the posts accessed from nuxt cache: {{posts}}</div>
</template>

<script setup lang="ts">
  const { data: posts } = useNuxtData('posts')
</script>
