<template>
  <AuthGuard>
    <div class="flex flex-row">
      <div class="min-h-max w-[88px]">
        <Menu />
      </div>
      <div class="w-full">
        <div class="p-20">
          <slot />
        </div>
        <Footer />
      </div>
    </div>
  </AuthGuard>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
