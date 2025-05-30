<template>
  <section
    id="servicios"
    class="py-24 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500 px-6"
  >
    <div class="max-w-6xl mx-auto text-center" data-aos="slide-right">
      <h2 class="text-3xl sm:text-4xl font-bold mb-12">
        {{ $t("services.title") }}
      </h2>

      <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <h3 class="text-xl font-semibold mb-2 text-white">
            {{ service.title }}
          </h3>
          <p class="text-gray-300 text-sm">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
const services = tm("services.list");
</script>
