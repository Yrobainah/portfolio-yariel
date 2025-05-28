<template>
  <div class="relative">
    <div id="about" class="absolute -top-24"></div>
    <section
      class="pt-32 sm:pt-28 md:pt-24 pb-16 px-6 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500"
    >
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
      >
        <!-- Imagen de perfil -->
        <div class="flex justify-center">
          <img
            :src="photo"
            alt="Foto de Yariel"
            class="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-blue-600 shadow-lg"
          />
        </div>

        <!-- Texto de presentación -->
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl font-bold mb-6">Sobre mí</h2>
          <p
            class="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
          >
            Soy un desarrollador <strong>backend</strong> especializado en
            <strong>Java</strong>, <strong>Spring Boot</strong> y
            <strong>Python</strong>, con un enfoque claro en construir
            soluciones <strong>robustas</strong>, <strong>seguras</strong> y
            <strong>escalables</strong>. Me apasiona diseñar APIs bien
            estructuradas, modelar datos y trabajar con arquitecturas orientadas
            a servicios.
          </p>
          <p
            class="mt-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
          >
            Cuando el proyecto lo requiere, también tengo experiencia utilizando
            <strong>Vue 3</strong> y <strong>Tailwind CSS</strong> para crear
            paneles administrativos funcionales e interfaces ligeras que se
            integran eficientemente con el backend.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import photo from "../assets/profile.jpg";
</script>
