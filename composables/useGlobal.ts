import { ref, onMounted, onBeforeUnmount } from 'vue'


export function useGlobal() {
    const global = ref('global state')

    return {
        global,
    }
}