import { useApi } from '@/composables/useApi'

export function BlogAPI() {
    return {
        getPost(id: string) {
            return useApi(`/posts/${id}`)
        },
    }
}