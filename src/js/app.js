import store from './store/locations';
import formUI from './config/ui.config';
import postForm from './service/postFormReg';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';


document.addEventListener('DOMContentLoaded', () => {
    initApp();

    // init phone mask

    formUI.initMaskPhone(formUI.phone);

    // Handlers

    async function initApp() {
        await store.init();

        const cities = await store.cities;
        const country = await store.countries;

        formUI.setAutocompleteCities(cities);
        formUI.setAutocompleteCountry(country);
    }

    // event

    formUI.btn.addEventListener('click', (e) => {
        e.preventDefault();
        const checkForm = formUI.checkItemForm();

        if (!checkForm) return;

        postForm.postFormServer();
        formUI.form.reset();
    })

})