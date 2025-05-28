<template>
  <Navbar :isDark="isDark" @toggleTheme="isDark = !isDark" />
  <Hero />
  <About />
  <Projects />
  <Services />
  <Contact />
  <ScrollToTop />
  <Footer />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Services from "./components/Services.vue";
import Contact from "./components/Contact.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
import Footer from "./components/Footer.vue";

const isDark = ref(true);

watch(isDark, (newValue) => {
  document.documentElement.classList.toggle("dark", newValue);
});

onMounted(() => {
  document.documentElement.classList.add("dark");
});
</script>
