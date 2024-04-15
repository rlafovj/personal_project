import { instance } from "@/redux/common/configs/axios-config"

export const findAllBoardsAPI = async (page: number) => {
    try {
        const response = await instance.get('/boards/list',{
            params: {page, limit: 10}
        })
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log('findBoardAPI Error : '+error)
        return error
    }
}
export const findBoardByIdAPI = async (id: number)=>{
    try{
        const response = await instance.get(`/boards/${id}`)
        console.log(' 게시판 리턴 ...')
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}