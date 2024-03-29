import { getRequest, postRequest, deleteRequest, putRequest } from "../request"

    export const Get_Medicines = () => {
        return getRequest("medicines")
    }

export const Set_Medicines = (data) => {
    return postRequest("medicines" , data)
}

export const Delete_Medicines = (id) => {
    return deleteRequest("medicines/" , id)
}

export const Edit_Medicines = (data) => {
    return putRequest("medicines"  , data)
}