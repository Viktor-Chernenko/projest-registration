import formUI from '../config/ui.config';
import {axiosBase} from '../plugins/axios/axios';

class PostForm {
    constructor() {
        this.FormValue = {
            email: null,
            password: null,
            nickname: null,
            first_name: null,
            last_name: null,
            phone: null,
            gender_orientation: null,
            city: null,
            country: null,
            date_of_birth_day: new Date().getDate(),
            date_of_birth_month: new Date().getMonth(),
            date_of_birth_year: new Date().getFullYear(),
        };
    }

    nowDateTest() {
        console.log(this.FormValue);
    }

    getFormValue() {
        this.FormValue.email = formUI.getEmail();
        this.FormValue.password = formUI.getPassword();
        this.FormValue.nickname = formUI.getNickname();
        this.FormValue.first_name = formUI.getFirstName();
        this.FormValue.last_name = formUI.getLastName();
        this.FormValue.phone = formUI.getPhone();
        this.FormValue.gender_orientation = formUI.getSelect();
        this.FormValue.city = formUI.getCity();
        this.FormValue.country = formUI.getCountry();

        return this.FormValue;
    }

    async postFormServer() {
        const FormValue = this.getFormValue();
        try {
            const request = await axiosBase.post(`/auth/signup`, FormValue);
            formUI.formMsg(request.data);
            console.log(request.data);
            return request;
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

const postForm = new PostForm();

export default postForm;