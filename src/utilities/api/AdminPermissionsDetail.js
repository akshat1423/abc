import axios from 'axios';
import { API_URL } from './urls';

async function AdminPermissionsDetailGet(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_user_permissions_detail/get-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminPermissionsDetailGetObject(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_user_permissions_detail/get-endpoint/${primaryKey}');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  

async function AdminPermissionsDetailPatch(primaryKey,patchData) {
    try {
      const response = await axios.patch(API_URL+'admin_user_permissions_detail/patch-endpoint/${primaryKey}', patchData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
async function AdminPermissionsDetailPut(primaryKey,putData) {
    try {
      const response = await axios.put(API_URL+'admin_user_permissions_detail/put-endpoint/${primaryKey}', putData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }   
  
async function AdminPermissionsDetailDelete(primaryKey) {
    try {
      const response = await axios.delete(API_URL+'admin_user_permissions_detail/delete-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  } 

  export{
    AdminPermissionsDetailGet,
    AdminPermissionsDetailGetObject,
    AdminPermissionsDetailPatch,
    AdminPermissionsDetailPut,
    AdminPermissionsDetailDelete,
};