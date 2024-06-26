import { instance } from '@/redux/common/configs/axios-config'

export const findAllArticlesAPI = async (page: number) => {
    try {
        const response = await instance.get('/articles/list',{
            params: {page, limit: 10}
        })
        return response.data
    } catch (error) {
        console.log('findArticleAPI Error : '+error)
        return error
    }
}