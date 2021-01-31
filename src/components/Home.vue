<template>
  <div class="home">
     <v-container>
          <v-col>
            <v-row class="mt-15 mb-10"><h1>Jumlah Kasus Covid-19 Terkini di Indonesia</h1></v-row>
            <v-row>
              <v-col class="col- col-sm-4 col-lg-2 data data-one">
                <h2 class="value">{{ confirmed }}</h2>
                <p>Terkonfirmasi</p>
              </v-col>
              <v-col class="col- col-sm-4 col-lg-2 data data-two">
                <h2 class="value">{{ treatment }}</h2>
                <p>Dalam Perawatan</p>
              </v-col>
              <v-col class="col- col-sm-4 col-lg-2 data data-three">
                <h2 class="value">{{ recovered }}</h2>
                <p>Sembuh</p>
              </v-col>
              <v-col class="col- col-sm-4 col-lg-2 data data-four">
                <h2 class="value">{{ deaths }}</h2>
                <p>Meninggal</p>
              </v-col>
            </v-row>
            <v-row class="update">Pembaruan terakhir : {{ lastUpdate }}</v-row>
          </v-col>
        </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { APIServiceCovid } from '../services/APIServiceCovid';
import moment from 'moment';

const apiServiceCovid = new APIServiceCovid();

const getDate = (dateValue) => moment(dateValue).format('D-MMM-YYYY');
const getTime = (dateValue) => moment(dateValue).format('HH:mm:ss');
const getTimeZone = (dateValue) => moment(dateValue).format("ZZ");
const getDatetime = (dateValue) => {
  const timezone = getTimeZone(dateValue) === '+0700' ? 'WIB' : getTimeZone(dateValue)
  return getDate(dateValue) + ' | ' + getTime(dateValue) + ' ' + timezone
}

export default {
  name: 'SummaryIndonesia',
  components: {
    
  },
  data: () => {
    return {
      countryCodeIndonesia: 'IDN',
      confirmed: "",
      deaths: "",
      recovered: "",
      treatment: "",
      lastUpdate: ""
    }
  },
  
  methods: {
    getData() {
      apiServiceCovid.getDataSummaryPerCountry(this.countryCodeIndonesia)
      .then((data) => {
        this.confirmed = data.confirmed.value
        this.deaths = data.deaths.value
        this.recovered = data.recovered.value
        this.treatment = this.confirmed - this.recovered - this.deaths
        this.lastUpdate = getDatetime(data.lastUpdate)
      })
      .catch((error) => {console.error(error)})
    }
  },
  
  created() {
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
  .row {
    justify-content: center;
  }
  
  .data{
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    background-color: #FFFFFF;
    text-align: center;
    font-size: 24px;
    padding-top: 30px;
    border-radius: 10px;

    p{
      font-size: 18px;
    }
  }

  .data-one{
    .value{
      color: #F2C94C;
    }
  }

  .data-two{
    .value{
      color: #F5A623;
    }
  }

  .data-three{
    .value{
      color: #219653;
    }
  }

  .data-four{
    .value{
      color: #D8232A;
    }
  }

  .update {
    margin-top: 40px;
  }

   @media (max-width: 1140px) {
    .data-three {
      margin-top: 20px;
    }
    .data-four {
     margin-top: 20px;
    }
   }

  @media (max-width: 576px) {
    .data-three {
      margin-top: 0px;
    }
    .data-four {
     margin-top: 20px;
    }
   }

   @media (max-width: 425px) {
    .data-three {
     margin-top: 20px;
    }
   }

  @media (max-width: 375px) {
    .data-two {
     margin-top: 20px;
    }

    .data-three {
      margin-top: 20px;
    }
   }
</style>
