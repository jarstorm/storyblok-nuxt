<template>
    <nav class="border-r-2 border-green-700 h-full w-[62px]">
        <ul class="list-none flex flex-col">
            <li class="cursor-pointer h-20 flex justify-center items-center mb-12">
                <NuxtLink to="/">
                    <nuxt-img                        
                        src="/left-logo.svg"
                        sizes="sm:100vw md:50vw lg:400px"                                                
                    />
                </NuxtLink>
            </li>
            <li class="cursor-pointer h-20 flex justify-center items-center mb-12">
                <NuxtLink to="/projects">
                    <nuxt-img                        
                        src="/icon-BoundingBox.svg"
                        sizes="sm:100vw md:50vw lg:400px"                                                
                    />
                </NuxtLink>
            </li>
            <li class="cursor-pointer h-20 flex justify-center items-center mb-12">
                <NuxtLink to="/news">
                    <nuxt-img                        
                        src="/icon-Calendar.svg"
                        sizes="sm:100vw md:50vw lg:400px"                                                
                    />
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
</script>