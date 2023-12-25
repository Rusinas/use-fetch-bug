<template lang="pug">
h2 with global state 2 {{ global }}
</template>

<script lang="ts" setup>
import { useGlobal } from '~/composables/useGlobal'
type Props = {
    content: string
}

defineProps<Props>()

const { global } = useGlobal()

</script>
