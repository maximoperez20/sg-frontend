import { useQuery } from '@tanstack/react-query';
import api from '../lib/axios';

export const useFind = ({ resource, params = {} }, options = {}) => {
  return useQuery({
    queryKey: [resource, params],
    queryFn: async () => {
      const { data } = await api.get(`/${resource}`, { params });
      return data;
    },
    ...options,
  });
};
