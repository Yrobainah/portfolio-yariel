import { createApp, onMounted } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'

onMounted(() => {
    AOS.init({
        duration: 1000,
        disable: 'false',
        easing: 'ease-in-out',
    })
}
)

createApp(App).use(i18n).mount('#app')
