import { instance } from "@/redux/common/configs/axios-config"

export const findAllBoardsAPI = async (page: number) => {
    try {
        const response = await instance.get('/boards',{
            params: {page, limit: 10}
        })
        return response.data
    } catch (error) {
        console.log('findBoardAPI Error : '+error)
        return error
    }
}