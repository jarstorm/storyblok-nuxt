<template>
  <main>
    <slot v-if="isLoggedIn"/>
    <div v-else>
      user is not signed in
    </div>
  </main>
</template>

<script setup lang="ts">
  import type {User} from "~/composables/useUser";

  const isLoggedIn = useIsLoggedIn()
  const {pending, data: serverUser} = await useLazyFetch<User>('/api/session', {key: 'user'})
  const {user, updateUser} = useUser()

  if (serverUser.value !== null) {
    updateUser(serverUser.value)
  }
</script>
