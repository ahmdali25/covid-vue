<template>
  <v-app class="app">
    <Navbar/>
    <v-main>
      <Home/>
      <!-- <Datatables/> -->
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
// import Datatables from './components/Datatables.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
     Home,
     Navbar,
    //  Datatables,
     Footer
  }
};
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');
  .app {
    background-color: #F5F5F5 !important;
    font-family: 'Poppins', sans-serif !important;
  }
</style>