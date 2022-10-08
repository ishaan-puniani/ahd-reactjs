import { AuthToken } from '../../auth/authToken';
import Axios from 'axios';
import config from '../../../config/config';
import Qs from 'qs';
import moment from 'moment';

const authAxios = Axios.create({
    baseURL: config.backendUrl,
    paramsSerializer: function (params) {
        return Qs.stringify(params, {
            arrayFormat: 'brackets',
            filter: (prefix, value) => {
                if (moment.isMoment(value) || value instanceof Date) {
                    return value.toISOString();
                }

                return value;
            },
        });
    },
});

authAxios.interceptors.request.use(
    async function (options) {
        const token = AuthToken.get();

        if (token) {
            options.headers['Authorization'] = `Bearer ${token}`;
        }

        return options;
    },
    function (error) {
        console.log('Request error: ', error);
        return Promise.reject(error);
    },
);

export default authAxios;
