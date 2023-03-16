import { axiosInstance } from "../../utilitis/axios"

export const getRelatedVideo = async ({ currentId, tags }) => {
    //?tags_like=javascript&tags_like=react&id_ne=1&_limit=2
    const queryString = tags?.length > 0 ? tags?.map(tag => `tags_like=${tag}`).join("&") + `&id_ne=${currentId}&_limit=5` : `id_ne=${currentId}&_limit=5`
    
    const response = await axiosInstance.get(`/videos?${queryString}`);
    return response.data //axios data er modde data dyy 
}
