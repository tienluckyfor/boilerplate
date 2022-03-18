import {Component} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

export class resfulClient extends Component {

    static _get_config() {
        const cookies = new Cookies();
        return {
            headers: {'Authorization': `Bearer ${cookies.get('oriico-token')}`}
        };
    }

    static _error_handle(err: { response: { data: { message: any; }; }; }) {
        console.log('err?.response?.data', err?.response?.data)
        // alert(err?.response?.data?.message)
        // return err?.response?.data
    }

    static async delete(endpoint: string, params = {}) {
        const config = {...this._get_config(), ...{params: params}}
        return await axios.delete(`${process.env.NEXT_PUBLIC_RESTFUL_URL}${endpoint}`, config).then(res => {
            return {
                status: true,
                data: res.data,
                errors: [],
            };
        })
            .catch(err => this._error_handle(err))
    }

    static async get(endpoint: string, params = {}) {
        const config = {...this._get_config(), ...{params: params}}
        return await axios.get(`${process.env.NEXT_PUBLIC_RESTFUL_URL}${endpoint}`, config).then(res => {
            return {
                status: true,
                data: res.data,
                errors: [],
            };
        })
            .catch(err => this._error_handle(err))
    }

    static async post(endpoint: string, params = {}) {
        const config = {...this._get_config(), ...{params: params}}
        return await axios.post(`${process.env.NEXT_PUBLIC_RESTFUL_URL}${endpoint}`, params, config).then(res => {
            console.log('post', res)
            return {
                status: true,
                data: res.data,
                errors: [],
            };
        })
            .catch(err => this._error_handle(err))
    }

    static postSync(endpoint: string, params = {}) {
        return new Promise((resolve, reject) => {
            const config = {...this._get_config(), ...{params: params}}
            axios.post(`${process.env.NEXT_PUBLIC_RESTFUL_URL}${endpoint}`, params, config).then(res => {
                resolve ({
                    status: true,
                    data: res.data,
                    errors: [],
                });
            })
            .catch(err => reject(this._error_handle(err)))
        })
    }

    static async put(endpoint: string, params = {}) {
        if (params instanceof FormData) {
            params.append("_method", "put")
        } else {
            // @ts-ignore
            params._method = 'put'
        }
        const res = await this.post(endpoint, params)
        return res
    }

}

