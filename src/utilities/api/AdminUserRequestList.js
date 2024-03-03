
import { axiosApiService } from "./axios";
const UserRequestAPIs = {
  UserRequestListGet: async function(){
    const response = await axiosApiService.get(`/auth/register/`);
    return response.data;
  },


  AdminRequestAcceptDecline: async function({accepted, email}){
    console.log('api', accepted, email);
    const formData = new FormData();
    formData.append("accepted", accepted);
    formData.append("email", email);
    

    const response = await axiosApiService.post(`/auth/admin_request/`, formData);
    return response.data;
  },
}
export default UserRequestAPIs;
