<template>
  <div
    class="cursor-pointer rounded-[14px] text-center active:!scale-[0.995] sm:inline-flex"
    :class="[props.className == '' ? 'px-[35px] py-[20px]' : props.className, props.type == 'primary' ? 'bg-lightDark text-white hover:bg-dark/90 active:bg-dark' : 'border border-[1px] border-dark hover:bg-[#F3F3F3]/60 active:bg-[#F3F3F3]']"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  className: {
    type: String,
    default: '',
  },
});
</script>

<style scoped></style>
