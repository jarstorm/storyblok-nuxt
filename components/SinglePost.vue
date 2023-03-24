<template>    
    <article key="post.id" class="border rounded-xl p-10 w-96 mr-6 mb-6">
        <span>{{data.post.title}}</span>
        <nuxt-img
            :src="data.post.img"
            provider="storyblok"
            sizes="sm:100vw md:50vw lg:400px"              
            format="webp"
        />            
        <span>{{data.post.body}}</span>
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

