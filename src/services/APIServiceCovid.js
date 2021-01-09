import axios from "axios";

const API_URL = 'https://covid19.mathdro.id/api';

export class APIServiceCovid {
    constructor() {
        
    }

    getBaseUrl() {
        return API_URL;
    }

    getDataSummaryPerCountry(countryCode) {
        const url = `${API_URL}/countries/` + countryCode;
        let data = axios.get(url).then(response => response.data);
        return data;
    }
}