import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: builder => ({
    getAllTask: builder.query({
      query: () => ({
        url: '/task',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllTaskQuery } = baseApi;
