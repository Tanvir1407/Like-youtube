import { axiosInstance } from "../../utilitis/axios"

export const getTags = async () => {
    const response = await axiosInstance.get("/tags");
    return response.data //axios data er modde data dyy 
}
