<template>
  <section
    id="contacto"
    class="py-24 transition-colors duration-500 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
  >
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-3xl sm:text-4xl font-bold mb-8">Contacto</h2>
      <p class="text-gray-600 mb-6 text-lg dark:text-gray-100">
        Si estás interesado en trabajar conmigo o quieres hablar sobre un
        proyecto, ¡no dudes en escribirme!
      </p>

      <div class="flex justify-center gap-6 text-2xl">
        <!-- Email -->
        <div class="relative group">
          <a
            href="mailto:yariel.dev@email.com"
            class="text-gray-800 dark:text-gray-300 hover:text-blue-500 transition"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z"
              />
            </svg>
          </a>
          <span
            class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 dark:bg-gray-300 dark:text-gray-800 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Enviar email
          </span>
        </div>

        <!-- GitHub -->
        <div class="relative group">
          <a
            href="https://github.com/yariel-dev"
            target="_blank"
            class="text-gray-800 dark:text-gray-300 hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.2.1 1.8 1.3 1.8 1.3 1 .1 2 .9 2 .9.2-.8.5-1.4.9-1.7-2.5-.3-5.2-1.2-5.2-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 2.9 1.1.9-.2 2-.3 3-.3s2.1.1 3 .3c2-1.4 2.9-1.1 2.9-1.1.6 1.3.2 2.3.1 2.6.7.8 1.1 1.8 1.1 3 0 4.2-2.7 5.1-5.2 5.4.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"
              />
            </svg>
          </a>
          <span
            class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 dark:bg-gray-300 dark:text-gray-800 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Ver GitHub
          </span>
        </div>

        <!-- LinkedIn -->
        <div class="relative group">
          <a
            href="https://linkedin.com/in/yariel-dev"
            target="_blank"
            class="text-gray-800 dark:text-gray-300 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.28h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.98v5.68h-3v-11h2.89v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.46z"
              />
            </svg>
          </a>
          <span
            class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 dark:bg-gray-300 dark:text-gray-800 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            Visitar LinkedIn
          </span>
        </div>
      </div>

      <p class="mt-8 text-sm text-gray-800 dark:text-gray-200">
        También puedes encontrarme en LinkedIn y GitHub para ver más sobre mi
        trabajo y experiencia.
      </p>
    </div>
  </section>
</template>
