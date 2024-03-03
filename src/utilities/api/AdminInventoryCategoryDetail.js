import axios from 'axios';
import { API_URL } from './urls';

async function AdminInventoryCategoryDetailGet(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_category_detail/get-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminInventoryCategoryDetailGetObject(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_category_detail/get-endpoint/${primaryKey}');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  

async function AdminInventoryCategoryDetailPatch(primaryKey,patchData) {
    try {
      const response = await axios.patch(API_URL+'admin_category_detail/patch-endpoint/${primaryKey}', patchData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
async function AdminInventoryCategoryDetailPut(primaryKey,putData) {
    try {
      const response = await axios.put(API_URL+'admin_category_detail/put-endpoint/${primaryKey}', putData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }   
  
async function AdminInventoryCategoryDetailDelete(primaryKey) {
    try {
      const response = await axios.delete(API_URL+'admin_category_detail/delete-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  } 

  export{
    AdminInventoryCategoryDetailGet,
    AdminInventoryCategoryDetailGetObject,
    AdminInventoryCategoryDetailPatch,
    AdminInventoryCategoryDetailPut,
    AdminInventoryCategoryDetailDelete,
};