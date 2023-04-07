
import useApi from 'src/composables/UseApi'

export default function typeService() {
    const { list, post, update, remove, getById } = useApi('type')

    return {
        list,
        post,
        update,
        remove,
        getById
    }
}