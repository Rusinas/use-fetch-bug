import { useFetch, useRuntimeConfig } from '#imports'

type FetchOptions = Parameters<typeof $fetch>[1]
type FetchReturn = ReturnType<typeof useFetch>

const baseURL = 'https://jsonplaceholder.typicode.com'

export async function useApi<T = any>(path: string, options?: FetchOptions) {

    const response = await useFetch(() => path, {
        baseURL,
        key: path,
        ...options
    })


    console.log('Path', path);
    console.log('Response data', response.data);
    console.log('Response data value', response?.data?.value);
    console.log('\n', )

    return response?.data?.value as T
}