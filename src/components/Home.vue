<template>
  <div class="home">
     <v-container>
          <v-col>
            <v-row class="mt-15 mb-10"><h1>Jumlah Kasus Covid-19 Terkini di Indonesia</h1></v-row>
            <v-row>
              <v-col class="col- col-sm-4 col-lg-2 data data-one">
                <v-progress-circular
                v-if="isLoading"
                  indeterminate
                  color="amber"
                ></v-progress-circular>
                <h2 v-else class="value">{{ addCommas(confirmed) }}</h2>
                <p>Terkonfirmasi</p>
              </v-col>
              <v-col class="col- col-sm-4 col-lg-2 data data-two">
                <v-progress-circular
                v-if="isLoading"
                  indeterminate
                  color="amber"
                ></v-progress-circular>
                <h2 v-else class="value">{{ addCommas(treatment) }}</h2>
                <p>Dalam Perawatan</p>
              </v-col>
              <v-col class="col- col-sm-4 col-lg-2 data data-three">
                <v-progress-circular
                v-if="isLoading"
                  indeterminate
                  color="amber"
                ></v-progress-circular>
                <h2 v-else class="value">{{ addCommas(recovered) }}</h2>
                <p>Sembuh</p>
              </v-col>
              <v-col class="col- col-sm-4 col-lg-2 data data-four">
                <v-progress-circular
                v-if="isLoading"
                  indeterminate
                  color="amber"
                ></v-progress-circular>
                <h2 v-else class="value">{{ addCommas(deaths) }}</h2>
                <p>Meninggal</p>
              </v-col>
            </v-row>
            <v-row class="update">Pembaruan terakhir : {{ getDateTime(lastUpdateDate) }}</v-row>
          </v-col>
        </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { APIServiceCovid } from '../services/APIServiceCovid';
import moment from 'moment';

const apiServiceCovid = new APIServiceCovid();

export default {
  name: 'SummaryIndonesia',
  components: {
    
  },
  data: () => {
    return {
      country: "Indonesia",
      lastUpdateDate: null,
      confirmed: null,
      deaths: null,
      recovered: null,
      treatment: null,
      isLoading: false
    }
  },
  
  methods: {
    async getData() {
      try {
        this.isLoading = true
        let data = await apiServiceCovid.getDataSummaryIndonesia()
        this.confirmed = data[0].positif.replace(/,/g, '')
        this.deaths = data[0].meninggal.replace(/,/g, '')
        this.recovered = data[0].sembuh.replace(/,/g, '')
        this.treatment = this.confirmed - this.recovered - this.deaths
      } catch(error) {
        console.error(error)
      }
    },
    async getLastUpdateDate() {
      try {
        let res = await apiServiceCovid.getLastUpdateDate()
        let data = res.filter(e => {
          return e.attributes.Country_Region == this.country
        })
        this.lastUpdateDate = data[0].attributes.Last_Update
      } catch(error) {
        console.error(error);
      }
    },
    getDateTime(dateValue) {
      const getDate = (dateValue) => moment(dateValue).format('D MMMM YYYY');
      const getTime = (dateValue) => moment(dateValue).format('HH:mm:ss');
      return getDate(dateValue) + ' ' + getTime(dateValue) + ' '
    },
    addCommas(data) {
      if(data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      }
    }
  },
  
  async created() {
    this.isLoading = true
    await this.getData()
    this.isLoading = false
    this.getLastUpdateDate()
    this.getDateTime()
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
