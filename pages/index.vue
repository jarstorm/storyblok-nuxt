<template>
  <section>
    <div v-if="pending">
      Loading posts...
    </div>
    <div v-else>
      <p>Fetched from <span>/api/posts</span></p>
      <div v-for="post in posts">
        <article key="post.id">
          <nuxt-img
            provider="storyblok"
            src="/f/206536/512x340/ec034d8b73/polynesia-3021072__340.jpg"
            sizes="sm:100vw md:50vw lg:400px"
            :modifiers="{ filters: { brightness: -10 } }"
            format="webp"
          />
          <p>{{post.id}} - {{post.title}}</p>
          <Icon icon="icon-home" />
          <Posts />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  useSeoMeta({
    ogTitle: 'Cardano Vue POC',
    description: 'This is Emurgo amazing site, let me tell you about cardano Vue POC',
    ogDescription: 'This is Emurgo amazing site, let me tell you about cardano Vue POC',
    ogImage: 'https://cardanospot.io/themes/custom/cardano/images/beta/cardano-spot-logo-beta.svg',
    twitterCard: 'summary_large_image'
  })
  const {pending, data: posts} = await useLazyFetch('/api/posts', {key: 'posts'})
</script>
