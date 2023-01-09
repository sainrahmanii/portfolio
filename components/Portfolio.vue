<template>
  <section id="portfolio">
    <div class="container lg:my-32 my-20 lg:px-36">
      <h2 class="text-3xl font-bold text-center">PORTFOLIO</h2>
      <div class="grid grid-cols-1 gap-2 mt-12 lg:grid-cols-2">
        <NuxtLink to="/portfolio/laracamp">
          <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/Bootcamp.png"
            alt="bootcamp"
            class="border rounded-md"
          />
        </div>
        </NuxtLink>
        <NuxtLink to="/portfolio/zullkit">
          <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/zullkit.png"
            alt="zullkit"
            class="border rounded-md"
          />
        </div>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/Marketplace.png"
            alt="marketplace"
            class="border rounded-md"
          />
        </div>
        <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/powerhuman.png"
            alt="powerhuman"
            class="border rounded-md"
          />
        </div>
        <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/carent.png"
            alt="carent"
            class="border rounded-md"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2 lg:grid-cols-4">
        <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/Rental.png"
            alt="rental"
            class="border rounded-md"
          />
        </div>
        <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/Portfolio.png"
            alt="portfolio.v1"
            class="border rounded-md"
          />
        </div>
        <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/portfoliov2.png"
            alt="portfolio.v2"
            class="border rounded-md"
          />
        </div>
        <div
          class="p-5 rounded-lg shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="~/assets/images/Jersey.png"
            alt="jersey"
            class="border rounded-md"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'

AOS.init()
</script>
