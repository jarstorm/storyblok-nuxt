<template>
  <AuthGuard>
    <div class="flex flex-row">
      <div class="min-h-max w-[62px]">
        <Menu />
      </div>
      <div class="w-full mt-5">
        <div class="p-2 flex- items-center justify-center">
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
