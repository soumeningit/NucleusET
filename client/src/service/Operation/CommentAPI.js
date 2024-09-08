import { apiConnector } from "../apiConnector";
import { questionAnswer } from "../apis";
import toast from 'react-hot-toast'

const { CREATE_QUESTION_API, CREATE_REPLY_API, GET_ALL_QUESTION_API, GET_ALL_REPLY_API } = questionAnswer;

export const createMessageAPI = async (data, token) => {

    const toastId = toast.loading("Loading....")
    let result = [];
    try {
        console.log("INSIDE CREATE MESSAGE API....")
        const response = await apiConnector("POST", CREATE_QUESTION_API, data, {
            Authorization: `${token}`
        })

        console.log("reposne : ", response);
        result = response?.data;
        if (!response.data.success) {
            throw new Error("FAILED IN MESSAGE CREATE API")
        }

    } catch (e) {
        toast.error("Comment Failed");
        console.log("error : " + e)
    }

    toast.dismiss(toastId)
    return result;
}

export const getAllQuestionsAPI = async (token) => {
    const toastId = toast.loading("Loading....")
    let result = [];
    try {
        console.log("INSIDE GET ALL MESSAGE API....")
        const response = await apiConnector("GET", GET_ALL_QUESTION_API, null, {
            Authorization: `${token}`
        })
        console.log("reposne : ", response);
        result = response?.data?.data;
        if (!response.data.success) {
            throw new Error("FAILED IN MESSAGE CREATE API")
        }
    } catch (e) {
        toast.error("Comment Failed");
        console.log("error : " + e)
    }
    toast.dismiss(toastId)
    return result;

}

export const createReply = async (data, token) => {
    const toastId = toast.loading("Loading....")
    let result = [];
    try {
        console.log("INSIDE CREATE REPLY API....")
        const response = await apiConnector("POST", CREATE_REPLY_API, data, {
            Authorization: `${token}`
        })
        console.log("reposne : ", response);
        result = response?.data;
        if (!response.data.success) {
            throw new Error("FAILED IN MESSAGE CREATE API")
        }
    } catch (e) {
        toast.error("Comment Failed");
        console.log("error : " + e)
    }
    toast.dismiss(toastId)
    return result;

}

export const getReply = async (data, token) => {
    const toastId = toast.loading("Loading....")
    let result = [];
    try {
        console.log("INSIDE GET REPLY API....");
        console.log("data in get reply api : ", data);
        const response = await apiConnector("POST", GET_ALL_REPLY_API, data, {
            Authorization: `${token}`
        });
        console.log("response in get reply api: ", response);
        result = response?.data?.data;

        if (!response?.data?.success) {
            throw new Error("FAILED IN GET COMMENT REPLY....");
        }
    } catch (e) {
        toast.error("Comment Failed");
        console.log("error : " + e)
    }

    toast.dismiss(toastId);
    return result;
}