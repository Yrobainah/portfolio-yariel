<template>
  <header
    class="fixed top-0 left-0 w-full shadow-2xl z-50 h-20 bg-gray-800 dark:bg-gray-900 text-gray-100 dark:shadow"
  >
    <div
      class="max-w-7xl mx-auto h-full flex items-center justify-between px-6"
    >
      <!-- Logo -->
      <a
        href="#inicio"
        class="flex items-center space-x-3 border rounded p-0.5"
      >
        <img
          :src="logo"
          alt="Logo YRH"
          class="h-16 w-auto object-contain max-w-[140px]"
        />
      </a>

      <!-- Navegación -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#about" class="hover:text-blue-400 transition">Sobre mí</a>
        <a href="#proyectos" class="hover:text-blue-400 transition"
          >Proyectos</a
        >
        <a href="#servicios" class="hover:text-blue-400 transition"
          >Servicios</a
        >
        <a href="#contacto" class="hover:text-blue-400 transition">Contacto</a>

        <!-- Interruptor de tema -->
        <button
          @click="emit('toggleTheme')"
          class="ml-4 flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300"
          aria-label="Cambiar tema"
        >
          {{ isDark ? "🌙 Oscuro" : "☀️ Claro" }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps(["isDark", "toggleTheme"]);
const emit = defineEmits(["toggleTheme"]);
import logo from "../assets/logo-yrh.png";
</script>
