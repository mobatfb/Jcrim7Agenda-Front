import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
//import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
            iconfont: 'mdi'
        },
        themes: {
            light: {
                primary: '#40cfff',
                secondary: '#4D7CA6',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                gray: '#b9b9b9'
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
});
