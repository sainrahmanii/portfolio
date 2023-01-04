<template>
  <section class="pt-36" id="home">
    <div class="container lg:px-36">
      <div class="flex flex-wrap">
        <div class="self-center w-full px-4 lg:w-1/2">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
            data-aos-once="false"
          >
            <h1 class="text-3xl font-medium lg:text-4xl">
              Halo 👋,<span class="block mt-1 font-semibold"
                >I Am Husain Rahmani</span
              >
            </h1>
            <h2 class="mt-1 text-lg font-medium lg:text-xl">
              Web Developer <span class="mx-1">|</span> UI Designer
            </h2>
            <p class="my-5 font-medium">
              Student at
              <span class="font-medium text-cyan-500"
                >Islamic Development Network Bogor</span
              >
              <br />Freelance Web Developer & UI Designer
            </p>
            <a
              href="/cv/cv.pdf" download=""
              class="px-12 py-2 font-medium text-white transition duration-300 ease-in-out rounded-full cursor-pointer bg-cyan-500 hover:bg-cyan-400"
            >
              Download CV
            </a>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2">
          <div
            class="mt-10"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="false"
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

<script>
import AOS from 'aos'

export default {

}

AOS.init()
</script>
