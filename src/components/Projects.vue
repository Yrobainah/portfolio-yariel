<template>
  <section
    id="proyectos"
    class="py-24 bg-gray-300 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-500"
  >
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-12">
        {{ $t("projects.title") }}
      </h2>

      <!-- Carrusel -->
      <div class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${active * 100}%)` }"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="min-w-full px-4"
          >
            <div
              class="bg-gray-800 dark:bg-gray-900 rounded-2xl p-8 shadow-xl text-left max-w-3xl mx-auto h-[380px] flex flex-col justify-between"
            >
              <div>
                <h3 class="text-3xl font-bold mb-3 text-white">
                  {{ project.title }}
                </h3>
                <p class="text-gray-300 text-lg mb-4">
                  {{ project.description }}
                </p>
                <p class="text-sm text-blue-400 mb-4">
                  {{ $t("projects.technologies") }}: {{ project.tech }}
                </p>
              </div>
              <a
                :href="project.link"
                target="_blank"
                class="text-blue-500 font-semibold hover:underline self-start"
              >
                {{ $t("projects.viewRepo") }}
              </a>
            </div>
          </div>
        </div>

        <!-- Controles -->
        <div class="absolute inset-0 flex justify-between items-center px-2">
          <button
            @click="prev"
            class="bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-full shadow"
          >
            ‹
          </button>
          <button
            @click="next"
            class="bg-gray-700 hover:bg-gray-600 text-white w-10 h-10 rounded-full shadow"
          >
            ›
          </button>
        </div>
      </div>

      <!-- Indicadores -->
      <div class="mt-6 flex justify-center gap-2">
        <span
          v-for="(_, index) in projects"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="index === active ? 'bg-blue-500' : 'bg-gray-500 opacity-50'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const projects = tm("projects.list");

const active = ref(0);
const interval = ref(null);

// Navegación manual
const next = () => {
  active.value = (active.value + 1) % projects.length;
};

const prev = () => {
  active.value = active.value === 0 ? projects.length - 1 : active.value - 1;
};

// Autoplay
onMounted(() => {
  interval.value = setInterval(() => {
    next();
  }, 5000); // Cambia cada 5 segundos
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>
