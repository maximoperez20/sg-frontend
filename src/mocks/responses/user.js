import { http, HttpResponse, delay } from 'msw';

const API_URL = import.meta.env.VITE_API_URL;

export const configMockResponses = [
  http.get(`${API_URL}/user/config`, async () => {
    await delay(500); // simulamos un pequeño delay
    return HttpResponse.json({
      names: 'Fiesta de Juana',
      header_text: '¡Bienvenidos a la celebración!',
      primary_color: '#1D4ED8',
      secondary_color: '#6B7280',
      tertiary_color: '#F59E0B',
      header_image: null, // no adjunta una imagen por defecto
      enable_description: true,
      dark_mode: false,
      slide_duration: 10,
      show_datetime: true,
      font_family: 'sans',
      animated_transitions: true,
    });
  }),

  http.post('/user/config', async () => {
    await delay(500); // simula guardar
    return HttpResponse.json({ success: true });
  }),
];
