<template>    
    <article key="project.id" class="border-2 rounded-xl border-black p-10 m-6">
        <span class="text-xl text-blue-800 font-bold mb-3 block">{{data.project.content.name}}</span>
        <nuxt-img
            :src="data.project.content.image.filename"
            sizes="sm:100vw md:50vw lg:400px"              
            format="webp"
            class="w-40 h-auto mb-10"
        />            
        <span>{{data.project.content.description}}</span>
    </article>
</template>
  
<script setup lang="ts">
    
</script>
  
<script>
  export default {
    props: ["data"],  
  }
</script>