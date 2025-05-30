import { createApp, onMounted } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
    AOS.init({
        duration: 1000,
        disable: 'false',
        easing: 'ease-in-out',
    })
}
)

createApp(App).mount('#app')
