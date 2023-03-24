<template>
  <section>
    <span>News page</span>
  </section>
</template>

<script setup lang="ts">
  useServerSeoMeta({
    ogTitle: 'Cardano Vue POC',
    description: 'This is Emurgo amazing site, let me tell you about cardano Vue POC',
    ogDescription: 'This is Emurgo amazing site, let me tell you about cardano Vue POC',
    ogImage: 'https://cardanospot.io/themes/custom/cardano/images/beta/cardano-spot-logo-beta.svg',
    twitterCard: 'summary_large_image'
  })
  const {pending, data: posts} = await useLazyFetch('/api/posts', {key: 'posts'})
</script>
