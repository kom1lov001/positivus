<template>
  <div class="flex flex-col sm:flex-row items-center gap-10">
    <h1 class="bg-primary inline-block px-2 text-3xl rounded font-semibold">
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
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
