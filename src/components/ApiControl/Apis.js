import { commonrequest } from "./ApiCall";
const BACKEND_URL = "https://credimotionbackend.vercel.app";


export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/api/v1/register`,data)
}

export const sentOtpFunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/api/v1/verify`,data)
}

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
}