<template>
  <v-app>
    <Navbar/>
    <v-main>
      <Home/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
     Home,
     Navbar,
     Footer
  }
};
</script>