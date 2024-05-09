import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '@/services/constants';

type UsersApiParams = {
    page: number;
    per_page: number
}

type UserByIdParams = {
    id: number;
}

const usersApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['Users', 'UserById'],
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getUsers: builder.query<UsersResponse, UsersApiParams>({
            query: (params) => `/users?page=${params.page}&per_page=${params.per_page}`,
            providesTags: ['Users'],
        }),
        getUserById: builder.query<GetUserByIdResponse, UserByIdParams>({
            query: ({id}) => `/users/${id}`,
            providesTags: ['UserById'],
        }),
        deleteUserById: builder.mutation<any, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export default usersApi;
