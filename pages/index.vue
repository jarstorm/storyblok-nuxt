<template>
  <section>
    <div>
      <h2>This is the main page</h2>      
      <div v-if="pending" class="mt-20 mb-20">
        Loading posts...
      </div>
      <div v-else class="mt-20 mb-20">
        <span class="text-blue-800 block mb-10 text-lg">List of posts. This comes from "our backend" /api/posts</span>
        
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
