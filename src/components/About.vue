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
          <h2 class="text-3xl sm:text-4xl font-bold mb-6">
            {{ $t("about.title") }}
          </h2>
          <p
            class="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {{ $t("about.desc.start")
            }}<strong>{{ $t("about.desc.backend") }}</strong>
            {{ $t("about.desc.middle1") }} <strong>Java</strong>,
            <strong>Spring Boot</strong> {{ $t("about.desc.and") }}
            <strong>Python</strong>, {{ $t("about.desc.middle2") }}
            <strong>{{ $t("about.desc.robust") }}</strong
            >, <strong>{{ $t("about.desc.save") }}</strong>
            {{ $t("about.desc.and") }}
            <strong>{{ $t("about.desc.scalable") }}</strong
            >. {{ $t("about.desc.end1") }}
          </p>
          <p
            class="mt-6 text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {{ $t("about.desc.end2") }}
            <strong>Vue 3</strong> y <strong>Tailwind CSS</strong>
            {{ $t("about.desc.end3") }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import photo from "../assets/profile.jpg";
</script>
