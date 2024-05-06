import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['todo'],
  endpoints: builder => ({
    getAllTask: builder.query({
      query: () => ({
        url: '/task',
        method: 'GET',
      }),
      providesTags: ['todo'],
    }),
    addTodo: builder.mutation({
      query: data => ({
        url: '/task',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['todo'],
    }),
  }),
});

export const { useGetAllTaskQuery, useAddTodoMutation } = baseApi;
