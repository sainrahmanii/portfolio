<template>
  <div>
    <header
      class="fixed top-0 left-0 z-10 flex items-center w-full bg-transparent lg:px-32 backdrop-blur-md"
    >
      <div class="container">
        <div class="relative flex items-center justify-between">
          <div class="px-4">
            <router-link
              to="/"
              class="flex items-center py-6 text-lg font-bold text-cyan-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
              Husain Rahmani
            </router-link>
          </div>
          <div class="flex items-center px-4">
            <button
              @click="mobileMenu = !mobileMenu"
              class="absolute block right-4 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
            <nav
              id="nav-menu"
              class="absolute w-full py-5 bg-white rounded-lg shadow-lg md:pl-5 right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              :class="{ hidden: mobileMenu }"
            >
              <ul class="block lg:flex">
                <li class="group">
                  <a
                    href="#home"
                    class="flex py-2 mx-4 text-base font-medium text-slate-700 group-hover:text-gray-400"
                    >Home</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#about"
                    class="flex py-2 mx-4 text-base font-medium text-slate-700 group-hover:text-gray-400"
                    >About</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#portfolio"
                    class="flex py-2 mx-4 text-base font-medium text-slate-700 group-hover:text-gray-400"
                    >Portfolio</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#certificate"
                    class="flex py-2 mx-4 text-base font-medium text-slate-700 group-hover:text-gray-400"
                    >Certificate</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#clients"
                    class="flex py-2 mx-4 text-base font-medium text-slate-700 group-hover:text-gray-400"
                    >Client</a
                  >
                </li>
                <li class="group">
                  <a
                    href="#contact"
                    class="flex py-2 mx-4 text-base font-medium text-slate-700 group-hover:text-gray-400"
                    >Contact</a
                  >
                </li>
                <li class="group">
                  <a
                    href="https://github.com/sainrahmanii"
                    target="_blank"
                    class="flex py-2 mx-4 text-base"
                    >
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" class="w-6">
                    </a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
</style>

<script setup>
import { ref } from 'vue'
window.onscroll = function () {
  const navbar = document.querySelector('header')
  const fixedNav = navbar.offsetTop

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add('navbar-fixed')
    navbar.classList.add('shadow-md')
  } else {
    navbar.classList.remove('navbar-fixed')
    navbar.classList.remove('shadow-md')
  }
}

const mobileMenu = ref(true)
</script>
