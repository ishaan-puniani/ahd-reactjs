import authAxios from '../shared/axios/authAxios';
import { IAhdConfig } from '../../components/AhdConfigProvider/AhdConfigContext';
export default class FaqService {
    static async listAll(
        ahdConfig: IAhdConfig,
        filter: string,
        orderBy: string,
        limit: number,
        offset: number,
    ): Promise<{ rows: any[]; count: number }> {
        const params = {
            filter,
            orderBy,
            limit,
            offset,
        };

        const response = await authAxios.get(`/tenant/${ahdConfig.tenantId}/faq`, {
            params,
        });

        return response.data;
    }
}
