<template>
  <div class="grid grid-cols-2 gap-x-10 rounded-[45px] p-12 shadow-custom-dark hover:scale-[1.002]" :class="bgClass">
    <div class="flex flex-col justify-between">
      <h1 class="text-xl font-semibold">
        <p :class="type == 'white' ? 'bg-primary' : 'bg-white'" class="inline-block text-nowrap rounded-[7px] bg-primary px-2">
          <slot name="title_1">Search engine</slot>
        </p>
        <br />
        <p class="inline-block text-nowrap rounded-[7px] bg-primary px-2" :class="type == 'white' ? 'bg-primary' : 'bg-white'">
          <slot name="title_2">optimization</slot>
        </p>
      </h1>
      <span :class="type == 'dark' ? 'text-white' : ''" class="flex items-center gap-2">
        <span class="cursor-pointer"
          ><svg class="!w-10" xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
            <circle cx="20.5" cy="20.5" r="20.5" :fill="type == 'dark' ? '#fff' : '#191A23'" />
            <path
              d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
              :fill="type == 'dark' ? '#000000' : '#B9FF66'"
            /></svg
        ></span>
        <p class="cursor-pointer">Learn more</p>
      </span>
    </div>
    <img src="../assets/tokyo-magnifier-web-search-with-elements 2.png" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
});
const bgClass = computed(() => {
  if (props.type === 'white') {
    return 'bg-gray border border-dark';
  } else if (props.type === 'dark') {
    return 'bg-lightDark';
  } else {
    return 'bg-primary border border-dark';
  }
});
</script>

<style scoped></style>
