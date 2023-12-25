<template lang="pug">

p {{ content }}

component(
    :is=""
    :content="component"
)

</template>

<script lang="ts" setup>
import { useGlobal } from '~/composables/useGlobal'
type Props = {
    content: string
}

const component = defineAsyncComponent(() => import('./WithGlobalState2.vue'))

defineProps<Props>()

const { global } = useGlobal()

</script>