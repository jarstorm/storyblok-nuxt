<template>    
    <article key="project.id" class="border rounded-xl p-10 w-96 mr-6 mb-6">
        <span>{{data.project.content.name}}</span>
        <nuxt-img
            :src="data.project.content.image.filename"
            sizes="sm:100vw md:50vw lg:400px"              
            format="webp"
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