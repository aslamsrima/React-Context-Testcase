import axios, { AxiosResponse } from 'axios';

interface Headers {
  [key: string]: string;
}

type ParamsType = {
  [key: string]: string;
};

async function get(url: string, params?: ParamsType): Promise<AxiosResponse> {
  const token = sessionStorage.getItem('token');
  const headers = token
    ? { 'x-auth-token': token }
    : {
        'content-type': 'application/json',
      };

  try {
    const config = {
      headers,
      params: params?.params ? params.params : null,
    };
    const response = await axios.get(url, config);

    return response;
  } catch (error) {
    throw error;
  }
}

async function post(url: string, params?: ParamsType): Promise<AxiosResponse> {
  let headers: Headers = {
    'content-type': 'application/json',
  };

  const token = sessionStorage.getItem('token');
  if (token) {
    headers = { 'x-auth-token': token, 'Content-Type': 'application/json' };
  }

  try {
    const response = await axios.post(url, params, { headers });
    return response;
  } catch (error) {
    throw error;
  }
}

async function put(url: string, parameters?: ParamsType): Promise<AxiosResponse> {
  let headers: Headers = {
    'content-type': 'application/json',
  };

  const token = sessionStorage.getItem('token');
  if (token) {
    headers = { 'x-auth-token': token, 'Content-Type': 'application/json' };
  }

  try {
    const response = await axios.put(url, parameters, { headers });
    return response;
  } catch (error) {
    throw error;
  }
}

async function deleteAPI(url: string): Promise<AxiosResponse> {
  const token = sessionStorage.getItem('token');
  const headers = token
    ? { 'x-auth-token': token }
    : {
        'content-type': 'application/json',
      };

  try {
    const response = await axios.delete(url, { headers });
    return response;
  } catch (error) {
    throw error;
  }
}

export const APIServices = {
  get,
  post,
  put,
  deleteAPI,
};
