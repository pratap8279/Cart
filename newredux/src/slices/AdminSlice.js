import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const AdminApi = createApi({
  reducerPath: 'Admin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),


  endpoints: (builder) => ({

    getAccount: builder.query({
      query: () => 'accounts',
      transformErrorResponse:(response)=>(response).sort((a,b)=>b.amount-a.amount),
      providesTags:['accounts']
    }),

      addAcount:builder.mutation({
        query:(amount,id)=>({
             url:'accounts',
             method:'POST',
             body:{amount,id}
        }),
        invalidatesTags:['accounts']
      }),

      DeleteAcount:builder.mutation({
        query:(id)=>({
             url:`accounts/${id}`,
             method:'DELETE'
            
        }),
        invalidatesTags:['accounts']
      }),
      UpdateAcount:builder.mutation({
        query:({id,amount})=>({
             url:`accounts/${id}`,
             method:'PATCH',
             body:{amount}
            
        }),
        invalidatesTags:['accounts']
      })


  }),

  

})


export const { useGetAccountQuery,useAddAcountMutation,useDeleteAcountMutation,useUpdateAcountMutation} = AdminApi