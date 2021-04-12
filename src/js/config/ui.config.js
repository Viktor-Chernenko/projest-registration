import {
    getAutocompleteCities,
    getAutocompleteCountry
} from '../plugins/materialize/materialize';
import '../plugins/phoneMask/phoneMask';

class UIForm {
    constructor() {
        this.form = document.forms['regForm'];
        this.email = document.getElementById('email');
        this.password = document.getElementById('password');
        this.nickname = document.getElementById('nickname');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.phone = document.getElementById('phone');
        this.select = document.getElementById('genderOrientation');
        this.city = document.getElementById('city');
        this.country = document.getElementById('country');
        this.btn = document.getElementById('btnReg');
        this.infoBox = document.getElementById('infoBox');

        this.arrItemsForm = [this.email, this.password, this.nickname, this.firstName, this.lastName, this.city, this.country, this.phone];

        this.CitiesAutocomplete = getAutocompleteCities(this.city);
        this.CountryAutocomplete = getAutocompleteCountry(this.country);

        this.regularExpress = {
            Email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
            Password: /^[0-9a-zA-Z]{8,}$/,
            Nickname: /^[0-9a-zA-Zа-яА-Я]{3,}$/,
            FirstName: /^[0-9a-zA-Zа-яА-Я]{2,}$/,
            LastName: /^[0-9a-zA-Zа-яА-Я]{4,}$/,
            City: /^[0-9a-zA-Zа-яА-Я]{2,}$/,
            Country: /^[0-9a-zA-Zа-яА-Я]{2,}$/,
            Phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,20}$/,
        }
    }

    formMsg(data) {
        if (data.error === false) {
            this.infoBox.classList.add('success');
            this.infoBox.classList.remove('error');
        } else {
            this.infoBox.classList.add('error');
            this.infoBox.classList.remove('success');
        }
        this.infoBox.querySelector('p').textContent = data.message;
    }

    getEmail() {
        return this.email.value;
    }

    getPassword() {
        return this.password.value;
    }

    getNickname() {
        return this.nickname.value;
    }

    getFirstName() {
        return this.firstName.value;
    }

    getLastName() {
        return this.lastName.value;
    }

    getPhone() {
        return this.phone.value;
    }

    getSelect() {
        return this.select.value;
    }

    getCity() {
        return this.city.value;
    }

    getCountry() {
        return this.country.value;
    }

    checkItemFormTemplate(regular, item) {
        const value = item.value;

        const result = regular.test(value);
        if (!result) {
            item.classList.add('not-Invalid');
        } else {
            item.classList.remove('not-Invalid');
        }
        return result;
    }

    initMaskPhone(phoneInput) {
        $(phoneInput).mask("+7 (999) 999 - 9999");
    }

    setAutocompleteCities(data) {
        this.CitiesAutocomplete.updateData(data);
    }

    setAutocompleteCountry(data) {
        this.CountryAutocomplete.updateData(data);
    }

    checkItemForm() {
        const checkArr = [];
        const testCheck = this.arrItemsForm.forEach(item => {
            const regular = this.regularExpress[item.dataset.required];
            const result = this.checkItemFormTemplate(regular, item);
            checkArr.push(result);
        });
        
        const regular = checkArr.every(item => item === true);

        return regular;
    }
}
const formUI = new UIForm;

export default formUI;