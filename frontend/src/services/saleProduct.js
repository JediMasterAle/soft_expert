
import useApi from 'src/composables/UseApi'

export default function saleService() {
    const { list, post, update, remove, getById } = useApi('sale_product')

    return {
        list,
        post,
        update,
        remove,
        getById
    }
}