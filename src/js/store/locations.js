import apiCitiesAndCountry from '../service/apiService';

class Store {
    constructor() {
        this.apiCitiesAndCountry = apiCitiesAndCountry.autoComplete;
        this.countries = null;
        this.cities = null;
    }

    async init() {
        const response = await this.apiCitiesAndCountry();
        const [baseCities, baseCountries] = response;
        this.countries = baseCountries;
        this.cities = baseCities;
    }
}

const store = new Store;

export default store;