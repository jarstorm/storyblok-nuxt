<template>
  <section>
    <div v-if="pending">
      Loading posts...
    </div>
    <div v-else>
      <p>Fetched from <span>/api/posts</span></p>
      <div v-for="post in posts">
        <article>
          <p key="post.id">{{post.id}} - {{post.title}}</p>
        </article>
        <Icon icon="icon-home" />
        <Posts />
      </div>
    </div>
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
