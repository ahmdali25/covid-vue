<template>
     <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        &copy; {{ new Date().getFullYear() }} — <strong>with <svg class="heart" viewBox="0 0 32 29.6">
        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg> 
        by <a style="text-decoration:none" href="https://github.com/ahmdali25">Ahmad Ali Azhary</a></strong><br>
        <strong>Source data API from <a style="text-decoration:none" href="https://github.com/mathdroid/covid-19-api">Mathdroid</a></strong>
      </v-col>
    </v-footer>
</template>

<style lang="scss" scoped>
  footer{
    background-color: #ECECEC !important;
  }
  .heart {
    fill: red;
    position: relative;
    top: 5px;
    width: 15px;
    margin-left: 5px;
    margin-right: 5px;
    animation: pulse 1s ease infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
</style>