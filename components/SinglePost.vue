<template>    
    <article key="post.id" class="border p-10 m-5 w-72 rounded-2xl">
        <span class="block mb-2 text-sm text-red-900">{{data.post.title}}</span>
        <nuxt-img
            :src="data.post.img"
            provider="storyblok"
            sizes="sm:100vw md:50vw lg:400px"              
            format="webp"
        />            
        <span class="block text-sm text-green-900">{{data.post.body}}</span>
    </article>
</template>
  
  <script setup lang="ts">
    defineProps<{data: SinglePostData}>()
  </script>
  
  <script lang="ts">
export default {
  props: ["data"]
}
</script>

