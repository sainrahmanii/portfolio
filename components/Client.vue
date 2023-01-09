<template>
  <section id="clients">
    <div class="container lg:px-36">
      <h2 class="text-3xl font-bold text-center">CLIENT</h2>
      <div class="overflow-x-hidden py-12">
        <div class="image-infinite">
          <div class="flex">
            <a href="https://www.adobe.com/" target="_blank">
              <img
                src="~/assets/images/adobe.png"
                alt="adobe"
                class="rounded-lg hover:shadow-2xl grayscale hover:grayscale-0 hover:border-none"
              />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <img
                src="~/assets/images/google.png"
                alt="google"
                class="rounded-lg hover:shadow-2xl grayscale hover:grayscale-0 hover:border-none"
              />
            </a>
            <a href="https://www.microsoft.com/id-id" target="_blank">
              <img
                src="~/assets/images/microsoft.png"
                alt="microsoft"
                class="rounded-lg hover:shadow-2xl grayscale hover:grayscale-0 hover:border-none"
              />
            </a>
            <a href="https://www.grab.com/id/" target="_blank">
              <img
                src="~/assets/images/grab.png"
                alt="grab"
                class="rounded-lg hover:shadow-2xl grayscale hover:grayscale-0 hover:border-none"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-infinite {
  animation: move-rtl 20000ms linear infinite;
}
.image-stop {
  animation: none;
}

@keyframes move-rtl {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

