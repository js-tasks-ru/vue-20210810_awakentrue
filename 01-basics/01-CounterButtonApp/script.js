import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter() {
            this.counter++;
        }
    }
});

const vm = app.mount('#app');