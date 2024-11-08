import {api,config} from './axiosInstance';

interface LoginResponse {
  success: boolean;
  JWTtoken?:string;
  message?: string;
}

interface LogoutResponse {
  success: boolean;
  message: string;
}



// Login function
export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    
    // console.log('starting call',email,password);
    const response = await api.post<LoginResponse>('/login', { email, password },config);
    document.cookie = `JWTtoken=${response.data.JWTtoken}; path=/; secure=true;`;
    return response.data;
  } catch (error: any) {
    // console.error('Login error:', error);
    return { success: false, message: 'Login failed. Please check your credentials.' };
  }
};

// Logout function
export const logout = async (): Promise<LogoutResponse> => {
  try {
    
    const response = await api.get<LogoutResponse>('/logout',config);
      // Clearing the JWTtoken cookie  
      document.cookie = 'JWTtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure=true; sameSite=None;'; 
    return response.data;
  } catch (error: any) {
    // console.error('Logout error:', error);
    return { success: false, message: 'Logout failed. Please try again.' };
  }
};
