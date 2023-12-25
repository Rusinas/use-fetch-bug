<template lang="pug">
h1 This is post
.post(v-if="post")
    h1 {{ post.title }}

    WithGlobalState(
        :content="post.title"
    )
</template>

<script lang="ts" setup>
import { BlogAPI } from '@/api/Blog.api'
import WithGlobalState from './WithGlobalState.vue'

const route = useRoute()

const post = ref()

async function getPost() {
    try {
        const result = await BlogAPI().getPost('1')

        console.log('Result?', result)

        post.value = result
    } catch (error) {
        console.error('Error loadign post', error)
    } finally {
        
    }
}

await getPost()
</script>

<style lang="sass" scoped>
.post
    max-width: 900px
</style>