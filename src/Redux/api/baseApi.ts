import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { url } from 'inspector';
const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getAllTask: (builder.mutation)=> ({
    
    })
  })
});
