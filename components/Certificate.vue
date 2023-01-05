<template>
  <section id="certificate">
    <div class="container lg:px-36">
      <div
        class="shadow-xl rounded-md p-7 mb-32"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
      >
        <h2 class="text-3xl font-bold text-center">Certificate</h2>
        <div
          id="carouselExampleIndicators"
          class="relative carousel slide mt-3"
          data-bs-ride="carousel"
        >
          <div class="relative w-full overflow-hidden carousel-inner">
            <div class="w-full carousel-item active">
              <img
                src="../assets/images/nuxtjs.png"
                class="block w-2/3 mx-auto rounded-lg"
                alt="nuxt.js"
              />
            </div>
            <div class="w-full carousel-item">
              <img
                src="../assets/images/vuejs.png"
                class="block w-2/3 mx-auto rounded-lg"
                alt="vue.js"
              />
            </div>
            <div class="w-full carousel-item">
              <img
                src="../assets/images/laravel.png"
                class="block w-2/3 mx-auto rounded-lg"
                alt="laravel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
