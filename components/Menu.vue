<template>
    <nav class="border-r border-green-700 h-full w-[88px]">
        <ul class="list-none flex flex-col">
            <li class="flex justify-center items-center p-4">
                <NuxtLink to="/">
                    <nuxt-img                        
                        src="/left-logo.svg"
                        sizes="sm:100vw md:50vw lg:400px"                                                
                    />
                </NuxtLink>
            </li>
            <li class="flex justify-center items-center p-4 mt-24">
                <NuxtLink to="/projects">
                    <nuxt-img                        
                        src="/icon-BoundingBox.svg"
                        sizes="sm:100vw md:50vw lg:400px"                                                
                    />
                </NuxtLink>
            </li>
            <li class="flex justify-center items-center p-4">
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