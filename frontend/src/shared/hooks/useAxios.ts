/* eslint-disable no-console */
import axios, { AxiosResponse } from 'axios';
import { IAxios } from '../interfaces/IAxios';
import { CONFIG } from '../config/config';

export const useAxios = () => {
  const instance = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    (request) => {
      if (CONFIG.isDevelopment) {
        console.log(
          `%c ${request?.method} request for ${request.url}\n`,
          'color:white;background-color:#fa8c16;padding:5px;border-radius:5px;',
          request.data
        );
        console.log({ params: request.params });
      }
      return request;
    },
    (error) => {
      if (CONFIG.isDevelopment) console.log(error);

      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      if (CONFIG.isDevelopment) {
        console.log(
          `%c response from ${response.config.url}\n`,
          'color:white;background-color:#1890ff;padding:5px;border-radius:5px;',
          response.data
        );
      }

      return response;
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          //   ls.remove('user');
          // Alert.error('', 'Token expired!. Please Login Again.');
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      }
      if (CONFIG.isDevelopment) console.log(error);
      return Promise.reject(error);
    }
  );

  const GET = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>
  ): Promise<AxiosResponse<R>> => {
    console.log('args', args);

    return instance({
      ...args,
      method: 'GET',
    });
  };
  const POST = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>
  ): Promise<AxiosResponse<R>> => {
    return instance({
      ...args,
      method: 'POST',
    });
  };

  const PUT = async <R, P = unknown, B = unknown>(
    args: IAxios<P, B>
  ): Promise<AxiosResponse<R>> => {
    return instance({
      ...args,
      method: 'PUT',
    });
  };

  const DELETE = async <P, B>(args: IAxios<P, B>): Promise<AxiosResponse> => {
    return instance({
      ...args,
      method: 'DELETE',
    });
  };

  return {
    instance,
    GET,
    POST,
    PUT,
    DELETE,
  };
};
