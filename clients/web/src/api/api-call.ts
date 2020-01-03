export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const apiCall = (host: string, baseUrl: string, method: Method) => async (api: string, data?: Object) => {
  const options: any = {
    method,
  };
  if (data) {
    options.headers = {
      'Content-Type': 'application/json'
    }
    options.body = JSON.stringify(data);
  }
  return fetch(`${host}${baseUrl}${api}`, options)
    .then(response => response.json())
};

export const setupApi = (host: string, baseUrl: string) => ({
  get: apiCall(host, baseUrl, 'GET'),
  post: apiCall(host, baseUrl, 'POST'),
  put: apiCall(host, baseUrl, 'PUT'),
  patch: apiCall(host, baseUrl, 'PATCH'),
  delete: apiCall(host, baseUrl, 'DELETE'),
});
