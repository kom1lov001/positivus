<template>
  <div>
    <div class="grid md:grid-cols-2 justify-center mt-[137px]">
      <div class="md:max-w-[531px]">
        <h1 class="text-6xl">Navigating the digital landscape for success</h1>
        <p class="text-xl py-[35px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <VButton>Book a consultation</VButton>
      </div>
      <div class="">
        <illustratiomn
          class-name="max-w-[600px] flex w-full items-center justify-center  max-h-[505px]"
        ></illustratiomn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButton from "../../components/VButton.vue";
import illustratiomn from "../../components/svgs/illustration.vue";
</script>

<style scoped></style>
