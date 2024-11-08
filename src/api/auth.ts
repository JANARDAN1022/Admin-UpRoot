import {api,config} from './axiosInstance';

interface AuthCheckResponse {
  isAuthenticated: boolean;
}

export const checkAuth = async (): Promise<AuthCheckResponse> => {
  try {
    const response = await api.get<AuthCheckResponse>('/authenticate',config);
    return response.data;
  } catch {
    return { isAuthenticated: false };
  }
};
