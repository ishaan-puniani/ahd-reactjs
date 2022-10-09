import authAxios from '../shared/axios/authAxios';
import configs from '../../config/config';
import { IAhdConfig } from '../../components/AhdConfigProvider/AhdConfigContext';

export default class ContextTourService {
    static async list(
        ahdConfig: IAhdConfig,
        filter: any | undefined,
        orderBy: string | undefined,
        limit: number,
        offset: number,
    ): Promise<{ rows: any; count: number }> {
        const params = {
            filter,
            orderBy,
            limit,
            offset,
        };

        const response = await authAxios.get(`/tenant/${ahdConfig.tenantId}/contexttour`, {
            params,
        });

        return response.data;
    }
}
