import axios from "axios";

// const CORS_URL='https://api.allorigins.win/raw?url='
const API_URL = 'https://api.kawalcorona.com'

export class APIServiceCovid {
    constructor() {
        
    }

    getBaseUrl() {
        return API_URL
    }

    async getDataSummaryIndonesia() {
        try {
            const url = `${API_URL}/indonesia`
            let data = await axios.get(url).then(response => response.data)
            return data
        } catch (error) {
            console.error(error)
        }
    }

    async getLastUpdateDate() {
        try {
            const url = `${API_URL}`
            let data = await axios.get(url).then(response => response.data)
            return data
        } catch (error) {
            console.error(error)
        }
    }
}