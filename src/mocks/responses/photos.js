import { delay, http, HttpResponse } from 'msw';

const API_URL = import.meta.env.VITE_API_URL;

export const photosMockResponses = [
  http.get('/photos', () => {
    return HttpResponse.json({ name: 'John Maverick' });
  }),
  http.get(`${API_URL}/photos`, () => {
    return HttpResponse.json({
      data: [
        {
          id: 1,
          image_url: 'https://inmofotos.es/wp-content/uploads/2021/10/foto-retrato-de-como-hacer-buenas-fotos-a-personas-1200x900.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Maximo',
        },
        {
          id: 1,
          image_url: 'https://www.istockphoto.com/resources/images/PhotoFTLP/P1-regional-iStock-1985150440.jpg',
          description: 'Liscing elit.',
          author: 'Maximo',
        },
        {
          id: 1,
          image_url: 'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          description: 'Lorem ipsumipsumipsumipsumipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Maximo',
        },
      ],
    },
  );
  }),
];
