// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'


export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  theme: {
    defaultTheme: 'mainTheme',
    themes: {
      mainTheme: {
        dark: true,
        colors: {
          primary: '#275FFE',
          secondary: '#FFFFFF',
          accent: '#F9F871',
        }
      }
    }
  }
})
