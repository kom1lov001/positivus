<template>
  <div class="pb-[140px]">
    <OverLabel :title="title" :description="description"></OverLabel>
    <template v-for="(items, index) of 1" :key="index">
      <div class="collapse mt-20 rounded-[40px] border border-dark bg-gray px-[60px] shadow-custom-dark transition duration-500 ease-in-out">
        <input type="checkbox" class="peer !px-[0] !py-1" v-model="isOpen" />
        <div class="collapse-title flex items-center justify-between !px-[0] py-[31px]">
          <div class="flex items-center gap-x-5">
            <h1 class="text-[40px]">01</h1>
            <span class="text-[30px]">Consultation</span>
          </div>
          <div class="menu-colapse rounded-full border border-black p-1">
            <transition name="fade" mode="out-in">
              <svg v-if="isOpen" key="minus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
              </svg>
              <svg v-else key="plus" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </transition>
          </div>
        </div>
        <div class="collapse-content !p-[0] text-sm">
          <div class="h-[0.5px] w-full bg-black"></div>
          <h1 class="py-10">
            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </h1>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OverLabel from '../OverLabel.vue';

const isOpen = ref(false);
const props = defineProps<{
  title: string;
  description: string;
}>();
</script>

<style scoped></style>
