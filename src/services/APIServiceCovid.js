import axios from "axios";

const CORS_URL='https://cors-anywhere.herokuapp.com/'
const API_URL = 'https://api.kawalcorona.com'

export class APIServiceCovid {
    constructor() {
        
    }

    getBaseUrl() {
        return API_URL
    }

    async getDataSummaryIndonesia() {
        try {
            const url = `${CORS_URL}${API_URL}/indonesia`
            let data = await axios.get(url).then(response => response.data)
            return data
        } catch (error) {
            console.error(error)
        }
    }

    async getLastUpdateDate() {
        try {
            const url = `${CORS_URL}${API_URL}`
            let data = await axios.get(url).then(response => response.data)
            return data
        } catch (error) {
            console.error(error)
        }
    }
}