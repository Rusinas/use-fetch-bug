import { ref, onMounted, onBeforeUnmount } from 'vue'

const global = ref('global state')

export function useGlobal() {
    return {
        global,
    }
}