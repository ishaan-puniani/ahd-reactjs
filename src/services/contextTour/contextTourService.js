import authAxios from '../shared/axios/authAxios';
import configs from '../../config/config';

export default class ContextTourService {
    static async list(filter, orderBy, limit, offset) {
        const params = {
            filter,
            orderBy,
            limit,
            offset,
        };

        const response = await authAxios.get(`/tenant/${configs.tenantId}/contexttour`, {
            params,
        });

        return response.data;
    }
}
