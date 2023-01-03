<template>
  <section class="pt-36">
    <div class="container lg:px-36">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 class="text-3xl lg:text-4xl font-medium">
              Halo 👋,<span class="font-semibold block mt-1"
                >I Am Husain Rahmani</span
              >
            </h1>
            <h2 class="text-lg lg:text-xl mt-1 font-medium">
              Web Developer <span class="mx-1">|</span> UI Designer
            </h2>
            <p class="my-5 font-medium">
              Student at
              <span class="text-cyan-500 font-medium"
                >Islamic Development Network Bogor</span
              >
              <br />Freelance Web Developer & UI Designer
            </p>
            <a
              href="#"
              class="py-2 px-12 rounded-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 ease-in-out text-white font-medium"
              >Download CV</a
            >
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <div
            class="mt-10"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img
              alt="coding"
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import AOS from 'aos'

    AOS.init();
</script>
