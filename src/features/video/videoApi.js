import { axiosInstance } from "../../utilitis/axios"

export const getVideo = async (id) => {
    const response = await axiosInstance.get(`/videos/${id}`);
    return response.data //axios data er modde data dyy 
}
