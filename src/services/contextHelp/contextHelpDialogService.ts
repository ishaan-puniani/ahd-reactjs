import authAxios from '../shared/axios/authAxios';
import configs from '../../config/config';
import { IAhdConfig } from 'src/components/AhdConfigProvider/AhdConfigContext';

export default class ContextHelpDialogService {
    static async list(
        ahdConfig: IAhdConfig,
        filter: any | undefined,
        orderBy: string | undefined,
        limit: number,
        offset: number,
    ): Promise<{ rows: any[]; count: number }> {
        const params = {
            filter,
            orderBy,
            limit,
            offset,
        };

        const response = await authAxios.get(`/tenant/${configs.tenantId}/context-help`, {
            params,
        });

        return response.data;
    }
}
