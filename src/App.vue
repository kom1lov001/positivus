<template>
  <div class="container px-[20px] md:px-[40px] lg:px-[60px]">
    <Header></Header>
    <Main></Main>
    <Marquee />
    <Services />
    <Contact />
    <div class="py-[140px]">
      <OverLabel
        :title="desciption[2].title"
        :description="desciption[2].description"
      ></OverLabel>
      <div
        class="bg-lightDark px-[40px] md:px-[60px] py-[40px] md:py-[70px] rounded-[45px] grid md:grid-cols-3 mt-[80px] text-white gap-10"
      >
        <div
          class="border-b border-b-white md:border-b-0 md:border-r md:border-r-white pb-9 md:pr-9"
        >
          <h1>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h1>
          <div class="text-primary cursor-pointer inline-block">
            <p>Learn more</p>
          </div>
        </div>
        <div
          class="border-b border-b-white md:border-b-0 md:border-r md:border-r-white pb-9 md:pr-9"
        >
          <h1>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h1>
          <div class="text-primary cursor-pointer inline-block">
            <p>Learn more</p>
          </div>
        </div>
        <div class="pr-4">
          <h1>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h1>
          <div class="text-primary cursor-pointer inline-block">
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </div>
    <WorkingProcess
      :description="desciption[3].description"
      :title="desciption[3].title"
    />
    <div class="pb-[140px]">
      <OverLabel
        :title="desciption[4].title"
        :description="desciption[4].description"
      ></OverLabel>
      <div class="grid w-full lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
        <div
          class="shadow-custom-dark border w-full border-dark rounded-[40px] relative py-10 px-8"
        >
          <div class="flex items-stretch gap-5">
            <img
              src="../src/assets/team/Picture.png"
              class="self-start"
              alt=""
            />
            <div class="self-end">
              <h1 class="text-lg font-semibold text-nowrap">John Smith</h1>
              <p class="text-md text-nowrap">CEO and Founder</p>
            </div>
            <img
              src="./assets/team/Social icon.png"
              width="34"
              height="34"
              class="self-start absolute right-8"
              alt=""
            />
          </div>
          <div class="h-[0.2px] w-full bg-dark my-[28px]"></div>
        </div>
        <div
          class="shadow-custom-dark border w-full border-dark rounded-[40px] relative py-10 px-8"
        >
          <div class="flex items-stretch gap-5">
            <img
              src="../src/assets/team/Picture.png"
              class="self-start"
              alt=""
            />
            <div class="self-end">
              <h1 class="text-lg font-semibold text-nowrap">John Smith</h1>
              <p class="text-md text-nowrap">CEO and Founder</p>
            </div>
            <img
              src="./assets/team/Social icon.png"
              width="34"
              height="34"
              class="self-start absolute right-8"
              alt=""
            />
          </div>
          <div class="h-[0.2px] w-full bg-dark my-[28px]"></div>
        </div>
        <div
          class="shadow-custom-dark border w-full border-dark rounded-[40px] relative py-10 px-8"
        >
          <div class="flex items-stretch gap-5">
            <img
              src="../src/assets/team/Picture.png"
              class="self-start"
              alt=""
            />
            <div class="self-end">
              <h1 class="text-lg font-semibold text-nowrap">John Smith</h1>
              <p class="text-md text-nowrap">CEO and Founder</p>
            </div>
            <img
              src="./assets/team/Social icon.png"
              width="34"
              height="34"
              class="self-start absolute right-8"
              alt=""
            />
          </div>
          <div class="h-[0.2px] w-full bg-dark my-[28px]"></div>
        </div>
        <div
          class="shadow-custom-dark border w-full border-dark rounded-[40px] relative py-10 px-8"
        >
          <div class="flex items-stretch gap-5">
            <img
              src="../src/assets/team/Picture.png"
              class="self-start"
              alt=""
            />
            <div class="self-end">
              <h1 class="text-lg font-semibold text-nowrap">John Smith</h1>
              <p class="text-md text-nowrap">CEO and Founder</p>
            </div>
            <img
              src="./assets/team/Social icon.png"
              width="34"
              height="34"
              class="self-start absolute right-8"
              alt=""
            />
          </div>
          <div class="h-[0.2px] w-full bg-dark my-[28px]"></div>
        </div>
        <div
          class="shadow-custom-dark border w-full border-dark rounded-[40px] relative py-10 px-8"
        >
          <div class="flex items-stretch gap-5">
            <img
              src="../src/assets/team/Picture.png"
              class="self-start"
              alt=""
            />
            <div class="self-end">
              <h1 class="text-lg font-semibold text-nowrap">John Smith</h1>
              <p class="text-md text-nowrap">CEO and Founder</p>
            </div>
            <img
              src="./assets/team/Social icon.png"
              width="34"
              height="34"
              class="self-start absolute right-8"
              alt=""
            />
          </div>
          <div class="h-[0.2px] w-full bg-dark my-[28px]"></div>
        </div>
        <div
          class="shadow-custom-dark border w-full border-dark rounded-[40px] relative py-10 px-8"
        >
          <div class="flex items-stretch gap-5">
            <img
              src="../src/assets/team/Picture.png"
              class="self-start"
              alt=""
            />
            <div class="self-end">
              <h1 class="text-lg font-semibold text-nowrap">John Smith</h1>
              <p class="text-md text-nowrap">CEO and Founder</p>
            </div>
            <img
              src="./assets/team/Social icon.png"
              width="34"
              height="34"
              class="self-start absolute right-8"
              alt=""
            />
          </div>
          <div class="h-[0.2px] w-full bg-dark my-[28px]"></div>
        </div>
      </div>
      <div class="inline-flex w-full justify-end mt-10">
        <VButton className="px-20 py-5">
          <h1>See all team</h1>
        </VButton>
      </div>
    </div>
    <div class="pb-[140px]">
      <OverLabel
        :title="desciption[5].title"
        :description="desciption[5].description"
      ></OverLabel>
    </div>
    <div class="pb-[140px]">
      <OverLabel
        :title="desciption[6].title"
        :description="desciption[6].description"
      ></OverLabel>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import VButton from "./components/VButton.vue";
// import ServiceVisit from "./components/ServiceVisit.vue";
import Header from "./components/ui/header/header.vue";
import OverLabel from "./components/OverLabel.vue";
import Marquee from "./components/ui/others/Marquee.vue";
import Services from "./components/ui/others/Services.vue";
import Footer from "./components/ui/footer/Footer.vue";
import Main from "./components/ui/Main.vue";
import Contact from "./components/ui/Contact.vue";
import WorkingProcess from "./components/ui/WorkingProcess.vue";

const isOpen = ref();
watch(
  () => isOpen.value,
  (newValue) => {
    const collapse = document.querySelector(".collapse");
    const btnCollapse = document.querySelector(".menu-colapse");
    if (newValue) {
      collapse.style.background = "#B9FF66";
    } else {
      collapse.style.background = "#F3F3F3";
    }
  }
);
const desciption = ref({
  1: {
    title: "Services",
    description:
      "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  },
  2: {
    title: "Case Studies",
    description:
      "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
  },
  3: {
    title: "Our Working Process ",
    description: "Step-by-Step Guide to Achieving Your Business Goals",
  },
  4: {
    title: "Team",
    description:
      "Meet the skilled and experienced team behind our successful digital marketing strategies",
  },
  5: {
    title: "Testimonials",
    description:
      "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
  },
  6: {
    title: "Contact Us",
    description: "Connect with Us: Let's Discuss Your Digital Marketing Needs",
  },
});
</script>

<style scoped lang="scss">
.bottom-border li .a,
.bottom-border2 li .a {
  position: relative;
}
.bottom-border li .a:hover {
  transition: all 0.5s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #b9ff66;
  }
}
.bottom-border2 li .a {
  transition: all 0.5s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 0.4px;
    background-color: #fff;
  }
}
.CollapseContent {
  padding: 0 10px 10px;
  margin: 0;
  color: var(--ForegroundColorLight);
  font-size: 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
