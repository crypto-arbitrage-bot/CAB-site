// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// const mainTheme = {
//   dark: true,
//   colors: {
//     primary: '#275FFE',
//     secondary: '#D9D9D9',
//     accent: '#F9F871',
//   }
// }

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'mainTheme',
    themes: {
      mainTheme: {
        dark: true,
        colors: {
          primary: '#275FFE',
          secondary: '#D9D9D9',
          accent: '#F9F871',
        }
      }
    }
  }
})
