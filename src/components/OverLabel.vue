<template>
  <div class="flex flex-col items-center gap-10 sm:flex-row">
    <h1 class="inline-block rounded bg-primary px-2 text-3xl font-semibold">
      {{ props.title }}
    </h1>
    <p class="max-w-lg text-[15.9px] leading-[16px]">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<style scoped></style>
