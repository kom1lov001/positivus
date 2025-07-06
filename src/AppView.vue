<template>
  <div>
    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Suspense>
            <component :is="Component" />
            <template #fallback>
              <div class="loading-state">
                <Icon icon="lucide:loader-2" width="32" height="32" class="animate-spin" />
                <span>Loading...</span>
              </div>
            </template>
          </Suspense>
        </template>
      </RouterView>
    </main>
  </div>
</template>

<script setup>
// import { RouterView } from "vue-router";
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
