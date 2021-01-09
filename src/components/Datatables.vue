<template>
        <v-main class="main-table">
            <v-container>
                <h1 style="text-align: center">Jumlah Kasus Per Provinsi</h1>
            </v-container>
            <v-row class="search-row">
                <v-col md="3" class="search-col">
                    <v-text-field 
                     v-model="search" 
                     append-icon="mdi-magnify" 
                     label="Cari provinsi" 
                     single-line hide-details>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-data-table
                     :headers="headers"
                     :items="tableDataPop"
                     :items-per-page="10"
                     :search="search"
                     class="elevation-1 data-table"
                    ></v-data-table>
                </v-col>
            </v-row>
        </v-main>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        search: "",
        tableData: [],
        headers: [
            { text: "Nama Provinsi", value: "provinsi" },
            { text: "Kasus Positif", value: "kasusPosi" },
            { text: "Sembuh", value: "kasusSemb" },
            { text: "Meninggal", value: "kasusMeni" }
        ]
    }),

    computed: {
        tableDataPop() {
            return this.tableData.slice(0,34);
        }
    },

    methods: {
        async getData() {
            try {
                const response  = await axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi/')
                this.tableData = response.data.data;
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

<style lang="scss">

    .search-row {

        .search-col {
            justify-content: left;
            margin-left: 18%;
            margin-right: 18%;
            background: #FAFAFA;
            margin-top: 20px;
            margin-bottom: 10px;
            border-radius: 20px;
            padding-top: 0;
            width: 100%;
        }
    }
    
    .data-table {
        width: 65%;
        margin: auto;
        margin-bottom: 40px;
        overflow: auto;

        thead {
            background-color: #ccc;
        }

        tbody {
            tr:nth-child(even){
                background-color: #f1f2f3;
            }
        }

        .v-data-footer{
            background-color: #ccc;
        }
    }
</style>