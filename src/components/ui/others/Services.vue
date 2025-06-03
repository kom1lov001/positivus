<template>
  <div id="services" class="pt-[70px] pb-[100px]">
    <OverLabel
      :title="desciption[1].title"
      :description="desciption[1].description"
    ></OverLabel>
    <div id="cards" class="mt-20 grid md:grid-cols-2 gap-10">
      <ServiceVisit type="white">
        <template #title_1>
          <div><h1>Search engine</h1></div>
        </template>
        <template #title_2>
          <div><h1>optimization</h1></div>
        </template>
      </ServiceVisit>
      <ServiceVisit type="primary">
        <template #title_1>
          <div><h1>Pay-per-click</h1></div>
        </template>
        <template #title_2>
          <div><h1>advertising</h1></div>
        </template>
      </ServiceVisit>
      <ServiceVisit type="dark"></ServiceVisit>
      <ServiceVisit type="white"></ServiceVisit>
      <ServiceVisit type="primary"></ServiceVisit>
      <ServiceVisit type="dark"></ServiceVisit>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceVisit from "../../ServiceVisit.vue";
import OverLabel from "../../OverLabel.vue";
import { desciption } from "../../../mocks/mock";
</script>

<style scoped></style>
