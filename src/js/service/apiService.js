import {instanceAutoComplete} from '../plugins/axios/axios';

class ApiCitiesAndCountry {
    constructor() {
        this.BaseCountry = null;
        this.BaseCity = null;
    }
    async autoComplete() {
        try {
            const baseAutoCompleteCities = await instanceAutoComplete.get('/cities');
            const baseAutoCompleteCountry = await instanceAutoComplete.get('/countries');
    
    
            const baseAutoCountry = baseAutoCompleteCountry.data.reduce((acc, item) => {
                acc[item.code] = item.name_translations.en;
    
                return acc;
            }, {})
    
            const BaseCountry = baseAutoCompleteCountry.data.reduce((acc, item) => {
                acc[item.name_translations.en] = null;
    
                return acc;
            }, [])
    
            const BaseCity = baseAutoCompleteCities.data.reduce((acc, item) => {
                const citiesName = item.name_translations.en;
                acc[`${citiesName}`] = null;
    
                return acc;
            }, []);

            return [BaseCity,BaseCountry];
        } catch (err) {
            Promise.reject(err);
            console.log(err);
        }
    }
}

const apiCitiesAndCountry = new ApiCitiesAndCountry();

export default apiCitiesAndCountry;