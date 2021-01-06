<template>
  <v-app>
    <v-app-bar
      app
      color="accent"
      dark
    >
      <div class="d-flex align-center">
          <h2>INFOCOV.ID</h2>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
     Home
  }
};
</script>