import { api } from 'boot/axios'
import { Notify } from 'quasar'

api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`
api.defaults.baseURL = process.env.BACKEND_BASE_URL + ''

export default function useApi(url) {
    const list = async (page = null, form = null) => {
        try {
            const params = {};
            if (page) {
                params.page = page;
            }
            if (form) {
                Object.assign(params, form);
            }
            const { data } = await api.get(url + '/read.php', { params })
            return data
        } catch (error) {
            return { error: error_method(error) }
        }
    }

    const getById = async (id) => {
        try {
            const { data } = await api.get(`${url}/read.php?id=${id}`)
            return data
        } catch (error) {
            return { error: error_method(error) }
        }
    }

    const post = async (form) => {
        form = objectToFormData(form);
        try {
            const { data } = await api.post(url + '/store.php', form)
            Notify.create({
                color: "positive",
                position: "top-right",
                message: data.success,
                icon: "done",
            });
            return data
        } catch (error) {
            return { error: error_method(error) }
        }
    }

    const update = async (form) => {
        form = objectToFormData(form);
        try {
            const { data } = await api.post(url + '/update.php', form)
            Notify.create({
                color: "positive",
                position: "top-right",
                message: data.success,
                icon: "done",
            });
            return data
        } catch (error) {
            return { error: error_method(error) }
        }
    }

    const remove = async (id) => {
        try {
            const { data } = await api.delete(`${url}/delete.php?id=${id}`)
            Notify.create({
                color: "positive",
                position: "top-right",
                message: data.success,
                icon: "done",
            });
            return data
        } catch (error) {
            return { error: error_method(error) }
        }
    }

    return {
        list,
        post,
        update,
        remove,
        getById
    }
}

function error_method(erro) {
    const status = erro.response.status
    const errors = erro.response.data.errors
    const message = erro.response.data.message
    if (status == 404) {
        Notify.create({
            color: "negative",
            position: "top-right",
            message: "Falha na solicitação.",
            icon: "report_problem",
        });
    }

    if (errors) {
        for (let index = 0; index < Object.keys(errors).length; index++) {
            const errorKey = Object.keys(errors)[index];
            const errorMessage = errors[errorKey];

            if (typeof errorMessage === 'string') {
                Notify.create({
                    color: "negative",
                    position: "top-right",
                    message: errorMessage,
                    icon: "report_problem",
                });
            } else {
                for (let index2 = 0; index2 < errorMessage.length; index2++) {
                    Notify.create({
                        color: "negative",
                        position: "top-right",
                        message: errorMessage[index2],
                        icon: "report_problem",
                    });
                }
            }
        }
    }
    else if (message) {
        if (message == 'Unauthenticated.') {
            return
        }
    }
}

function objectToFormData(obj) {
    const formData = new FormData();

    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach(value => formData.append(key, value));
        } else {
            formData.append(key, obj[key]);
        }
    }

    return formData;
}
