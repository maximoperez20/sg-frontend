import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // opcional: 10 segundos
});

// // Interceptor para agregar token (si lo necesitás)
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token'); // o donde lo tengas
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Interceptor para manejar errores globales
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.warn('No autorizado. Redireccionar al login...');
//       // podés hacer logout o redirigir
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
