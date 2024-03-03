import axios from 'axios';
import { API_URL } from './urls';

async function AdminUserRequestDetailGet(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_user_requests_detail/get-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminUserRequestDetailGetObject(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_user_requests_detail/get-endpoint/${primaryKey}');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  

async function AdminUserRequestDetailPatch(primaryKey,patchData) {
    try {
      const response = await axios.patch(API_URL+'admin_user_requests_detail/patch-endpoint/${primaryKey}', patchData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
async function AdminUserRequestDetailPut(primaryKey,putData) {
    try {
      const response = await axios.put(API_URL+'admin_user_requests_detail/put-endpoint/${primaryKey}', putData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }   
  
async function AdminUserRequestDetailDelete(primaryKey) {
    try {
      const response = await axios.delete(API_URL+'admin_user_requests_detail/delete-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  } 

  export{
    AdminUserRequestDetailGet,
    AdminUserRequestDetailGetObject,
    AdminUserRequestDetailPatch,
    AdminUserRequestDetailPut,
    AdminUserRequestDetailDelete,
};