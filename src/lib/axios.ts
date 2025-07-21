import { HTTP_STATUS } from "@/constant/constant";
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getCookie('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === HTTP_STATUS.UNAUTHORIZED && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getCookie('refreshToken');
        if (refreshToken) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001'}/auth/refresh`,
            { refreshToken },
            { withCredentials: true }
          );

          const { accessToken, newRefreshToken } = response.data;
          
          setCookie('accessToken', accessToken, {
            maxAge: Number(process.env.TOKEN_EXPIRE_TIME) || 60 * 60 * 24 * 7, 
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
          });

          if (newRefreshToken) {
            setCookie('refreshToken', newRefreshToken, {
              maxAge: Number(process.env.REFRESH_TOKEN_EXPIRE_TIME) || 60 * 60 * 24 * 30, 
              httpOnly: false,
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'lax',
            });
          }

          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const sendGet = async (url: string, params?: Record<string, unknown>) => {
  const response = await api.get(url, { params });
  return response.data;
};

export const sendPost = async (url: string, data: Record<string, unknown>) => {
  const response = await api.post(url, data);
  return response.data;
};

export const sendPut = async (url: string, data: Record<string, unknown>) => {
  const response = await api.put(url, data);
  return response.data;
};

export const sendDelete = async (url: string) => {
  const response = await api.delete(url);
  return response.data;
};

export const sendPatch = async (url: string, data: Record<string, unknown>) => {
  const response = await api.patch(url, data);
  return response.data;
};
