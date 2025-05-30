<template>
  <section
    id="inicio"
    class="pt-24 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-t from-gray-300 to-white dark:from-gray-800 dark:to-gray-600 text-gray-900 dark:text-white transition-colors duration-500"
  >
    <!-- Columna izquierda: texto -->
    <div class="text-center md:text-left max-w-xl">
      <h1
        class="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
        v-html="$t('hero.title')"
      />

      <p
        class="text-lg sm:text-xl mb-6 text-gray-700 dark:text-gray-300"
        v-html="$t('hero.description')"
      />

      <!-- Stack -->
      <div class="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
        <span
          class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 rounded-full"
          >Java</span
        >
        <span
          class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 rounded-full"
          >Spring Boot</span
        >
        <span
          class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 rounded-full"
          >Python</span
        >
        <span
          class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 rounded-full"
          >Vue 3</span
        >
      </div>

      <!-- Botones -->
      <div class="flex gap-4 justify-center md:justify-start">
        <a
          href="#proyectos"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          v-html="$t('hero.projectsButton')"
        />
        <a
          href="#contacto"
          class="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition"
          v-html="$t('hero.contactButton')"
        />
      </div>
    </div>

    <!-- Columna derecha: logo o imagen -->
    <div class="flex justify-center items-center">
      <img
        :src="logo"
        alt="Logo YRH"
        class="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl"
      />
    </div>
  </section>
</template>

<script setup>
import logo from "../assets/logo-yrh.png";
</script>
