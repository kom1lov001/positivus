<template>
  <div id="services" class="pb-[100px] pt-[70px]">
    <OverLabel :title="desciption[1].title" :description="desciption[1].description"></OverLabel>
    <div id="cards" class="mt-20 grid gap-10 md:grid-cols-2">
      <template v-for="(item, i) in data" :key="i">
        <ServiceVisit :type="item?.type">
          <template #title_1>
            <div>
              <h1>{{ item.title_1 }}</h1>
            </div>
          </template>
          <template #title_2>
            <div>
              <h1>{{ item.title_2 }}</h1>
            </div>
          </template>
        </ServiceVisit>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceVisit from '../../ServiceVisit.vue';
import OverLabel from '../../OverLabel.vue';
import { desciption } from '../../../mocks/mock';
import { ref } from 'vue';

const data = ref([
  {
    title_1: 'Search engine',
    title_2: 'optimization',
    type: 'white',
  },
  {
    title_1: 'Search engine',
    title_2: 'optimization',
    type: 'primary',
  },
  {
    title_1: 'Search engine',
    title_2: 'optimization',
    type: 'dark',
  },
  {
    title_1: 'Search engine',
    title_2: 'optimization',
    type: 'white',
  },
  {
    title_1: 'Search engine',
    title_2: 'optimization',
    type: 'primary',
  },
  {
    title_1: 'Search engine',
    title_2: 'optimization',
    type: 'dark',
  },
]);
</script>

<style scoped></style>
