import authAxios from '../shared/axios/authAxios';
import configs from '../../config/config';

export default class ContextHelpService {
  
  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get(
      `/tenant/${configs.tenantId}/context-help`,
      {
        params,
      },
    );

    return response.data;
  }
}
