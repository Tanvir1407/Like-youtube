import { axiosInstance } from "../../utilitis/axios"

export const getVideos = async () => {
    const response = await axiosInstance.get("/videos");
    return response.data //axios data er modde data dyy 
}
