<template>
  <section>
    <div>
      <span>Project list</span>
      <span>This data comes from Storyblok. I use a REST query to get the data</span>    
      <div v-if="pending">
        Loading data...
      </div>
      <div v-else>
        <p>Fetched from <span>/api/projects</span></p>
        <div class="flex flex-row">
          <button class="bg-gray-400 rounded-xl p-6 flex items-center justify-center m-10 cursor-pointer" @click="filterAction('all')">All</button>
          <button class="bg-gray-400 rounded-xl p-6 flex items-center justify-center m-10 cursor-pointer" @click="filterAction('cardano')">Only Cardano</button>
          <button class="bg-gray-400 rounded-xl p-6 flex items-center justify-center m-10 cursor-pointer" @click="filterAction('ethereum')">Only Ethereum</button>
        </div>
        <div class="flex flex-row flex-wrap">
          <div v-for="project in projects">
            <SingleProject :data="{project}"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const filter:Ref<String> = ref("all")
 
  const {pending, data: projects} = await useFetch(() => `/api/projects?filter=${filter.value}`)

  const filterAction = async (val: String) => {
    filter.value = val;    
  }

  useServerSeoMeta({
    ogTitle: 'Cardano Vue POC',
    description: 'This is Emurgo amazing site, let me tell you about cardano Vue POC',
    ogDescription: 'This is Emurgo amazing site, let me tell you about cardano Vue POC',
    ogImage: 'https://cardanospot.io/themes/custom/cardano/images/beta/cardano-spot-logo-beta.svg',
    twitterCard: 'summary_large_image'
  })
</script>
