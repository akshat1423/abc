import axios from 'axios';
import { API_URL } from './urls';

async function AdminLocationDetailGet(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_location_detail/get-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminLocationDetailGetObject(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_location_detail/get-endpoint/${primaryKey}');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  

async function AdminLocationDetailPatch(primaryKey,patchData) {
    try {
      const response = await axios.patch(API_URL+'admin_location_detail/patch-endpoint/${primaryKey}', patchData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
async function AdminLocationDetailPut(primaryKey,putData) {
    try {
      const response = await axios.put(API_URL+'admin_location_detail/put-endpoint/${primaryKey}', putData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }   
  
async function AdminLocationDetailDelete(primaryKey) {
    try {
      const response = await axios.delete(API_URL+'admin_location_detail/delete-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  } 

  export{
    AdminLocationDetailGet,
    AdminLocationDetailGetObject,
    AdminLocationDetailPatch,
    AdminLocationDetailPut,
    AdminLocationDetailDelete,
};