<template>
  <div class="container px-[20px] md:px-[40px] lg:px-[60px]">
    <Header></Header>
    <Main></Main>
    <Marquee />
    <Services />
    <Contact />

    <div class="py-[140px]">
      <OverLabel :title="desciption[2].title" :description="desciption[2].description"></OverLabel>
      <div class="mt-[80px] grid gap-10 rounded-[45px] bg-lightDark px-[40px] py-[40px] text-white md:grid-cols-3 md:px-[60px] md:py-[70px]">
        <div class="border-b border-b-white pb-9 md:border-b-0 md:border-r md:border-r-white md:pr-9">
          <h1>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</h1>
          <div class="relative top-3 inline-block cursor-pointer text-primary md:top-5">
            <p>Learn more</p>
          </div>
        </div>
        <div class="border-b border-b-white pb-9 md:border-b-0 md:border-r md:border-r-white md:pr-9">
          <h1>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</h1>
          <div class="relative top-3 inline-block cursor-pointer text-primary md:top-5">
            <p>Learn more</p>
          </div>
        </div>
        <div class="pr-4">
          <h1>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</h1>
          <div class="relative top-3 inline-block cursor-pointer text-primary md:top-5">
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </div>
    <WorkingProcess :description="desciption[3].description" :title="desciption[3].title" />
    <div class="pb-[140px]">
      <OverLabel :title="desciption[4].title" :description="desciption[4].description"></OverLabel>
      <div class="mt-20 grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
        <template v-for="item of 6" :key="item">
          <div class="relative w-full rounded-[40px] border border-dark px-8 py-10 shadow-custom-dark">
            <div class="flex items-stretch gap-5">
              <img src="../src/assets/team/Picture.png" class="!h-[102px] !w-[102px] self-start" alt="" />
              <div class="self-end">
                <h1 class="text-nowrap text-lg font-semibold">John Smith</h1>
                <p class="text-md text-nowrap">CEO and Founder</p>
              </div>
              <img src="./assets/team/Social icon.png" width="34" height="34" class="absolute right-8 self-start" alt="" />
            </div>
            <div class="my-[28px] h-[0.2px] w-full bg-dark"></div>
            <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
          </div>
        </template>
      </div>
      <div class="mt-10 inline-flex w-full justify-end">
        <VButton className="px-20 py-5">
          <h1>See all team</h1>
        </VButton>
      </div>
    </div>
    <div class="pb-[140px]">
      <OverLabel :title="desciption[5].title" :description="desciption[5].description"></OverLabel>
      <div class="flex min-h-[625px] items-start rounded-[45px] bg-lightDark">
        <div class="relative rounded-[45px] border border-lime-400 bg-lightDark p-6 text-white">
          <p class="text-base leading-relaxed text-white">
            ”We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our
            business. We highly recommend Positivus to any company looking to grow their online presence.”
          </p>

          <div class="absolute -bottom-[22px] left-10 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[22px] border-l-transparent border-r-transparent border-t-primary"></div>
          <div class="absolute -bottom-[20px] left-10 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[22px] border-l-transparent border-r-transparent border-t-lightDark"></div>
        </div>
        <div class="relative max-w-xl rounded-[45px] border border-lime-400 bg-lightDark p-6 text-white">
          <p class="text-base leading-relaxed text-white">
            ”We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our
            business. We highly recommend Positivus to any company looking to grow their online presence.”
          </p>

          <div class="absolute -bottom-[22px] left-10 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[22px] border-l-transparent border-r-transparent border-t-primary"></div>
          <div class="absolute -bottom-[20px] left-10 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[22px] border-l-transparent border-r-transparent border-t-lightDark"></div>
        </div>
        <div class="relative max-w-xl rounded-[45px] border border-lime-400 bg-lightDark p-6 text-white">
          <p class="text-base leading-relaxed text-white">
            ”We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our
            business. We highly recommend Positivus to any company looking to grow their online presence.”
          </p>

          <div class="absolute -bottom-[22px] left-10 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[22px] border-l-transparent border-r-transparent border-t-primary"></div>
          <div class="absolute -bottom-[20px] left-10 h-0 w-0 border-l-[22px] border-r-[22px] border-t-[22px] border-l-transparent border-r-transparent border-t-lightDark"></div>
        </div>

        <!-- <div class="flex items-center relative">
          <div
            class="message-card border-[1px] relative rounded-[45px] top-0 rounded- min-h-[237px] min-w-[606px] border-primary"
          ></div>
        </div> -->
      </div>
    </div>
    <div class="pb-[140px]">
      <OverLabel :title="desciption[6].title" :description="desciption[6].description"></OverLabel>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import VButton from './components/VButton.vue';
// import ServiceVisit from "./components/ServiceVisit.vue";
import Header from './components/ui/header/header.vue';
import OverLabel from './components/OverLabel.vue';
import Marquee from './components/ui/others/Marquee.vue';
import Services from './components/ui/others/Services.vue';
import Footer from './components/ui/footer/Footer.vue';
import Main from './components/ui/Main.vue';
import Contact from './components/ui/Contact.vue';
import WorkingProcess from './components/ui/WorkingProcess.vue';

const isOpen = ref();
watch(
  () => isOpen.value,
  (newValue) => {
    const collapse = document.querySelector('.collapse');
    const btnCollapse = document.querySelector('.menu-colapse');
    if (newValue) {
      collapse.style.background = '#B9FF66';
    } else {
      collapse.style.background = '#F3F3F3';
    }
  }
);
const desciption = ref({
  1: {
    title: 'Services',
    description: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
  },
  2: {
    title: 'Case Studies',
    description: 'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies',
  },
  3: {
    title: 'Our Working Process ',
    description: 'Step-by-Step Guide to Achieving Your Business Goals',
  },
  4: {
    title: 'Team',
    description: 'Meet the skilled and experienced team behind our successful digital marketing strategies',
  },
  5: {
    title: 'Testimonials',
    description: 'Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services',
  },
  6: {
    title: 'Contact Us',
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
    content: '';
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
    content: '';
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
.message-card {
}
.message-card::before {
  content: '';
  position: absolute;
  top: -20px;
  background: red;
  height: 40px;
  width: 100%;
}
</style>
<style>
.triangle-border {
  position: relative;
  padding: 15px;
  border: 2px solid #b9ff66;
  color: white;
  background: #191a23;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

/* .triangle-border.left {
  margin-left: 30px;
}

.triangle-border.right {
  margin-right: 30px;
} */

.triangle-border:before {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 15px;
  border-width: 20px 20px 0;
  border-style: solid;
  border-color: #b9ff66 transparent;
  display: block;
  width: 0;
}
.triangle-border:after {
  content: '';
  position: absolute;
  bottom: -17px;
  left: 12.5px;
  border-width: 22px 23px 0;
  border-style: solid;
  border-color: #191a23 transparent;
  display: block;
  width: 0;
}
</style>
