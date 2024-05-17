import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

const client = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API_BASE_URL}`
});

async function request() {
  const config: AxiosRequestConfig = {
    headers: {
      Accept: "application/json"
    } as RawAxiosRequestHeaders
  };
  try {
    const response: AxiosResponse = await client.get(`/books`, config);
    return response.data;
  } catch (err) {
    return false;
  }
}

export default request;
