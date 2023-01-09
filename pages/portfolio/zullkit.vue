<template>
  <div class="mt-24">
    <Navbar />
    <main role="main" class="w-full container my-12 lg:px-24 sm:w-2/3 md:w-2/3">
      <h1
        class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
      >
        Zullkit
      </h1>
      <p class="text-gray-500">Design Online Store</p>
      <section id="gallery">
        <img
          :src="require(`~/assets/images/zullkit/${defaultImage}.png`)"
          alt=""
          class="w-full mt-6 rounded-2xl"
        />
        <div class="grid grid-cols-4 gap-4 mt-4">
          <template v-for="gallery in galleries">
            <div
              class="overflow-hidden cursor-pointer rounded-xl lg:rounded-2xl hover:ring-2 hover:ring-indigo-500"
              :class="{
                'ring-2 ring-indigo-500': defaultImage == gallery.image
              }"
              @click="defaultImage = gallery.image"
            >
              <img
                :src="require(`~/assets/images/zullkit/${gallery.image}.png`)"
                class="w-full"
                alt=""
              />
            </div>
          </template>
        </div>
      </section>
      <section class="" id="orders">
        <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
        <div class="text-gray-500">
          <p class="pb-4">
            Sportly App UI Kit will help your Sport, Fitness, and Workout App
            products or services. Came with modern and sporty style, you can
            easily edit and customize all elements with components that can
            speed up your design process.
          </p>
          <p class="pb-4">
            Suitable for : <br />
            - Sport App <br />
            - Fitness & GYM App <br />
            - Workout App <br />
            - Trainer & Tracker App <br />
            - And many more <br />
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const defaultImage = ref('image-1')
const galleries = ref([
  { id: 1, image: 'image-1' },
  { id: 2, image: 'image-2' },
  { id: 3, image: 'image-3' },
  { id: 4, image: 'image-4' },
])
</script>
