import authAxios from '../shared/axios/authAxios';
import configs from '../../config/config';

export default class FaqService {
    static async listAll(filter, orderBy, limit, offset) {
        const params = {
            filter,
            orderBy,
            limit,
            offset,
        };

        const response = await authAxios.get(`/tenant/${configs.tenantId}/faq`, {
            params,
        });

        return response.data;
    }
}
