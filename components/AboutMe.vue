<template>
  <section class="pt-36">
    <div class="container lg:px-36">
      <div class="flex flex-wrap items-center my-12">
        <div
          class="w-full items-center lg:w-1/2"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="../assets/images/husain.png"
            alt="husain rahmani"
            class="lg:max-w-full w-2/3 lg:mx-0 mx-auto"
          />
        </div>
        <div class="w-full lg:w-1/2">
          <div class="rounded-lg shadow-xl">
            <div class="py-3">
              <h1 class="text-center text-3xl">About Me</h1>
              <p class="text-center font-medium mt-2">
                Junior Web Developer dengan pengalaman 1+ tahun lebih berkarir
                sebagai web developer, memiliki kemampuan yang baik dalam
                pengembangan web menggunakan framework Laravel sebagai backend,
                MySql sebagai database, Git dan Github sebagai Version Control
                System, framework Vue.Js dan Nuxt.Js sebagai frontend. Sedang
                mencari pekerjaan untuk menjadi Freelance Web Developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'

AOS.init()
</script>
