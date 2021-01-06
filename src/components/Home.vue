<template>
  <div class="home">
     <v-container>
          <v-col>
            <v-row class="title"><h1>Data Kasus Covid-19 Terkini di Indonesia</h1></v-row>
            <v-row class="data">
              <v-col class="col-lg-2 data-one">
                <h2 class="value">{{ confirmed }}</h2>
                <p>Terkonfirmasi</p>
              </v-col>
              <v-col class="col-lg-2 data-two">
                <h2 class="value">{{ treatment }}</h2>
                <p>Dalam Perawatan</p>
              </v-col>
              <v-col class="col-lg-2 data-three">
                <h2 class="value">{{ recovered }}</h2>
                <p>Sembuh</p>
              </v-col>
              <v-col class="col-lg-2 data-four">
                <h2 class="value">{{ deaths }}</h2>
                <p>Meninggal</p>
              </v-col>
            </v-row>
            <v-row class="update">Pembaruan terakhir : {{ lastUpdate }}</v-row>
          </v-col>
        </v-container>
        <datatables></datatables>
      
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
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import moment from 'moment';
import Datatables from '../components/Datatables.vue'

const getDate = (dateValue) => moment(dateValue).format('D-MMM-YYYY');
const getTime = (dateValue) => moment(dateValue).format('HH:mm:ss');
const getTimeZone = (dateValue) => moment(dateValue).format("ZZ");
const getDatetime = (dateValue) => {
  const timezone = getTimeZone(dateValue) === '+0700' ? 'WIB' : getTimeZone(dateValue)
  return getDate(dateValue) + ' | ' + getTime(dateValue) + ' ' + timezone
}

export default {
  name: 'Home',
  components: {
    Datatables
  },
  data: () => {
    return {
      confirmed: "",
      deaths: "",
      recovered: "",
      treatment: "",
      lastUpdate: ""
    }
  },
  
  methods: {
    async getData() {
      try {
        const dataResponse = await axios.get('https://indonesia-covid-19.mathdro.id/api')
        this.confirmed = dataResponse.data.jumlahKasus;
        this.deaths = dataResponse.data.meninggal;
        this.recovered = dataResponse.data.sembuh;
        this.treatment = dataResponse.data.perawatan;
        this.lastUpdate = getDatetime(dataResponse.lastUpdate);
      }
      catch(error) {
        console.log(error);
      }
    }
  },
  
  created() {
    this.getData();
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

  .home {
    font-family: 'Poppins', sans-serif !important;
  }

  .row {
    justify-content: center;
  }

  .title{
    margin-top: 50px;
    margin-bottom: 50px;
    font-family: 'Poppins', sans-serif !important;
  }

  .data-one{
    font-size: 24px;
    text-align: center;
    background-color:  #F1F2F3;
    padding-top: 30px;
    border-radius: 10px;
  }

  .data-one .value{
    color: #F2C94C;
  }

  .data-two{
    font-size: 24px;
    text-align: center;
    background-color:  #F1F2F3;
    padding-top: 30px;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .data-two .value{
    color: #F5A623;
  }

  .data-three{
    font-size: 24px;
    text-align: center;
    background-color:  #F1F2F3;
    padding-top: 30px;
    border-radius: 10px;
    margin-right: 10px;
  }

  .data-three .value{
    color: #219653;
  }

  .data-four{
    font-size: 24px;
    text-align: center;
    background-color:  #F1F2F3;
    padding-top: 30px;
    border-radius: 10px;
  }

  .data-four .value{
    color: #D8232A;
  }

  .update {
    margin-top: 40px;
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
