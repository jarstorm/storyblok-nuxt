<template>
  <section>
    <div>
      <span>This is the main page</span>
      <span>List of posts. This comes from "our backend"</span>    
      <div v-if="pending">
        Loading posts...
      </div>
      <div v-else>
        <p>Fetched from <span>/api/posts</span></p>
        <div class="flex flex-row flex-wrap">
          <div v-for="post in posts">
            <SinglePost :data="{post}"/>
          </div>
        </div>
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
