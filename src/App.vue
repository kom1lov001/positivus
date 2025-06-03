<template>
  <div class="container px-[20px] md:px-[40px] lg:px-[60px]">
    <Header></Header>
    <div class="grid md:grid-cols-2 justify-center mt-[137px]">
      <div class="max-w-[531px]">
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
    <Marquee />
    <Services />
    <div
      id="happen_digital"
      class="bg-gray grid md:grid-cols-2 sm:h-[347px] relative rounded-[45px]"
    >
      <div class="p-[60px] md:max-w-[500px] w-full space-y-[26px]">
        <h1 class="text-2xl font-semibold">Let’s make things happen</h1>
        <p class="text-sm">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <VButton type="primary">Get your free proposal</VButton>
      </div>
      <div
        class="absolute hidden md:block top-[50%] right-[10%] translate-x-[10%] translate-y-[-50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="359"
          class=""
          height="395"
          viewBox="0 0 359 395"
          fill="none"
        >
          <path
            d="M169 163.5C215.644 163.5 257.858 167.471 288.398 173.887C303.673 177.095 316 180.91 324.497 185.13C328.746 187.24 332.011 189.439 334.208 191.694C336.403 193.948 337.5 196.222 337.5 198.5C337.5 200.778 336.403 203.052 334.208 205.306C332.011 207.561 328.746 209.76 324.497 211.87C316 216.09 303.673 219.905 288.398 223.113C257.858 229.529 215.644 233.5 169 233.5C122.356 233.5 80.1417 229.529 49.6016 223.113C34.3275 219.905 21.9997 216.09 13.5029 211.87C9.25392 209.76 5.98872 207.561 3.79199 205.306C1.59696 203.052 0.5 200.778 0.5 198.5C0.5 196.222 1.59696 193.948 3.79199 191.694C5.98872 189.439 9.25392 187.24 13.5029 185.13C21.9997 180.91 34.3275 177.095 49.6016 173.887C80.1417 167.471 122.356 163.5 169 163.5Z"
            stroke="black"
          />
          <path
            d="M169 188.5C215.644 188.5 257.858 192.471 288.398 198.887C303.673 202.095 316 205.91 324.497 210.13C328.746 212.24 332.011 214.439 334.208 216.694C336.403 218.948 337.5 221.222 337.5 223.5C337.5 225.778 336.403 228.052 334.208 230.306C332.011 232.561 328.746 234.76 324.497 236.87C316 241.09 303.673 244.905 288.398 248.113C257.858 254.529 215.644 258.5 169 258.5C122.356 258.5 80.1417 254.529 49.6016 248.113C34.3275 244.905 21.9997 241.09 13.5029 236.87C9.25392 234.76 5.98872 232.561 3.79199 230.306C1.59696 228.052 0.5 225.778 0.5 223.5C0.5 221.222 1.59696 218.948 3.79199 216.694C5.98872 214.439 9.25392 212.24 13.5029 210.13C21.9997 205.91 34.3275 202.095 49.6016 198.887C80.1417 192.471 122.356 188.5 169 188.5Z"
            stroke="black"
          />
          <path
            d="M169 213.5C215.644 213.5 257.858 217.471 288.398 223.887C303.673 227.095 316 230.91 324.497 235.13C328.746 237.24 332.011 239.439 334.208 241.694C336.403 243.948 337.5 246.222 337.5 248.5C337.5 250.778 336.403 253.052 334.208 255.306C332.011 257.561 328.746 259.76 324.497 261.87C316 266.09 303.673 269.905 288.398 273.113C257.858 279.529 215.644 283.5 169 283.5C122.356 283.5 80.1417 279.529 49.6016 273.113C34.3275 269.905 21.9997 266.09 13.5029 261.87C9.25392 259.76 5.98872 257.561 3.79199 255.306C1.59696 253.052 0.5 250.778 0.5 248.5C0.5 246.222 1.59696 243.948 3.79199 241.694C5.98872 239.439 9.25392 237.24 13.5029 235.13C21.9997 230.91 34.3275 227.095 49.6016 223.887C80.1417 217.471 122.356 213.5 169 213.5Z"
            stroke="black"
          />
          <path
            d="M252.343 66.6289L252.511 67.5342L253.179 66.9004L300.312 22.1758L272.341 80.8232L271.944 81.6543L272.857 81.5342L337.277 73.0547L280.177 104.061L279.367 104.5L280.177 104.939L337.277 135.944L272.857 127.466L271.944 127.346L272.341 128.177L300.312 186.823L253.179 142.1L252.511 141.466L252.343 142.371L240.5 206.259L228.657 142.371L228.489 141.466L227.821 142.1L180.688 186.823L208.659 128.177L209.056 127.346L208.143 127.466L143.722 135.944L200.823 104.939L201.633 104.5L200.823 104.061L143.722 73.0547L208.143 81.5342L209.056 81.6543L208.659 80.8232L180.688 22.1758L227.821 66.9004L228.489 67.5342L228.657 66.6289L240.5 2.74023L252.343 66.6289Z"
            stroke="black"
          />
          <path
            d="M277 177L294.789 222.06L341.11 207.874L316.972 249.877L356.944 277.247L309.055 284.563L312.578 332.879L277 300L241.422 332.879L244.945 284.563L197.056 277.247L237.028 249.877L212.89 207.874L259.211 222.06L277 177Z"
            fill="#D9D9D9"
          />
          <path
            d="M112.194 306.102L135.134 264L158.258 306.102L200.269 329.134L158.258 352.166L135.134 394.269L112.194 352.166L70 329.134L112.194 306.102Z"
            fill="#B9FF66"
          />
          <circle cx="152.5" cy="186.5" r="62" fill="black" stroke="black" />
          <ellipse cx="132" cy="173" rx="10" ry="20" fill="white" />
          <ellipse cx="173" cy="173" rx="10" ry="20" fill="white" />
        </svg>
      </div>
    </div>
    <div class="py-[140px]">
      <OverLabel
        :title="desciption[2].title"
        :description="desciption[2].description"
      ></OverLabel>
      <div
        class="bg-lightDark px-[60px] py-[70px] rounded-[45px] grid md:grid-cols-3 mt-[80px] text-white gap-10"
      >
        <div
          class="border-b border-b-white md:border-r md:border-r-white pb-9 md:pr-9"
        >
          <h1>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h1>
          <div class="text-primary">
            <p>Learn more</p>
          </div>
        </div>
        <div
          class="border-b border-b-white md:border-r md:border-r-white pb-9 md:pr-9"
        >
          <h1>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h1>
          <div class="text-primary">
            <p>Learn more</p>
          </div>
        </div>
        <div class="pr-4">
          <h1>
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </h1>
          <div class="text-primary">
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-[140px]">
      <OverLabel
        :title="desciption[3].title"
        :description="desciption[3].description"
      ></OverLabel>
      <template v-for="(items, index) of 1" :key="index">
        <div
          class="collapse transition duration-500 ease-in-out bg-gray mt-20 border-dark shadow-custom-dark rounded-[40px] px-[60px] border"
        >
          <input type="checkbox" class="peer !px-[0] !py-1" v-model="isOpen" />
          <div
            class="collapse-title flex items-center !px-[0] justify-between py-[31px]"
          >
            <div class="flex gap-x-5 items-center">
              <h1 class="text-[40px]">01</h1>
              <span class="text-[30px]">Consultation</span>
            </div>
            <div class="menu-colapse rounded-full p-1 border border-black">
              <transition name="fade" mode="out-in">
                <svg
                  v-if="isOpen"
                  key="minus"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                <svg
                  v-else
                  key="plus"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </transition>
            </div>
          </div>
          <div class="collapse-content text-sm !p-[0]">
            <div class="bg-black h-[0.5px] w-full"></div>
            <h1 class="py-10">
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </h1>
          </div>
        </div>
      </template>
    </div>
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
import { ref, watch } from "vue";
import VButton from "./components/VButton.vue";
// import ServiceVisit from "./components/ServiceVisit.vue";
import Header from "./components/ui/header/header.vue";
import illustratiomn from "./components/svgs/illustration.vue";
import OverLabel from "./components/OverLabel.vue";
import Marquee from "./components/ui/others/Marquee.vue";
import Services from "./components/ui/others/Services.vue";
import Footer from "./components/ui/footer/Footer.vue";

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
