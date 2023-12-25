
export default {
    routes: () => [
        {
            name: 'Home',
            path: '/',
            component: () => import('@/components/Post.vue')
        },
    ],
}