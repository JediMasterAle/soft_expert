
import useApi from 'src/composables/UseApi'

export default function saleService() {
    const { list, post, update, remove, getById } = useApi('sale')

    return {
        list,
        post,
        update,
        remove,
        getById
    }
}