import { http, HttpResponse } from 'msw';
import { photosMockResponses } from './responses/photos'
import { configMockResponses } from './responses/user';
export const handlers = [
  ...photosMockResponses,
  ...configMockResponses,
  http.get('/user', () => {
    return HttpResponse.json({ name: 'John Maverick' });
  }),
  http.get('https://dummyjson.com/todos', () => {
    return HttpResponse.json({
      todos: [
        {
          id: 1,
          todo: 'Do something nice for someone you care about',
          completed: false,
          userId: 152,
        },
        {
          id: 2,
          todo: 'Memorize a poem',
          completed: true,
          userId: 13,
        },
        {
          id: 3,
          todo: 'Watch a classic movie',
          completed: true,
          userId: 68,
        },
        {
          id: 4,
          todo: 'Watch a documentary',
          completed: false,
          userId: 84,
        },
      ],
    });
  }),
];
