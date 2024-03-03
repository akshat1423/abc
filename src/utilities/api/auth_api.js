
import { axiosApiService } from "./axios";
import * as actionTypes from '../../redux/constants/userConstant'
const Auth_APIs = {
    register: async function  ({ name, email, phoneNumber, position, other_position}) {
       // console.log('4', name, email, phoneNumber, position);
        const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phoneNumber", phoneNumber);
            formData.append("position", position);
            formData.append("otherPosition", other_position);
            const response = await axiosApiService.post(`/auth/register/`, formData, {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
            return response;
    },

    adminLogin: async function ({email, password}) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        //console.log('198', formData);
        // try{
            const response = await axiosApiService.post(`/auth/login/`, formData, {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
            //dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: response.data });
            return response.data
        //}
        // catch(error){
        //     // dispatch({ type: actionTypes.USER_LOGIN_FAIL, payload: error });
        //     //console.log('error', error);
        //     return{error}
        // }
    },

    studentLogin: async function ({email, password}) {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        //console.log('198', formData);
        try{
            const response = await axiosApiService.post(`/auth/login/`, formData, {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            });
            return response;
        }catch(error){
            console.error("Error fetching data", error);
            return {};
        }
    },

}
export default Auth_APIs;
