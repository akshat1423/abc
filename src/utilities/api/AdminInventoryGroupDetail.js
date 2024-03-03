import axios from 'axios';
import { API_URL } from './urls';

async function AdminInventoryGroupDetailGet(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_inventory_group_detail/get-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminInventoryGroupDetailGetObject(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_inventory_group_detail/get-endpoint/${primaryKey}');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  

async function AdminInventoryGroupDetailPatch(primaryKey,patchData) {
    try {
      const response = await axios.patch(API_URL+'admin_inventory_group_detail/patch-endpoint/${primaryKey}', patchData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
async function AdminInventoryGroupDetailPut(primaryKey,putData) {
    try {
      const response = await axios.put(API_URL+'admin_inventory_group_detail/put-endpoint/${primaryKey}', putData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }   
  
async function AdminInventoryGroupDetailDelete(primaryKey) {
    try {
      const response = await axios.delete(API_URL+'admin_inventory_group_detail/delete-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  } 

  export{
    AdminInventoryGroupDetailGet,
    AdminInventoryGroupDetailGetObject,
    AdminInventoryGroupDetailPatch,
    AdminInventoryGroupDetailPut,
    AdminInventoryGroupDetailDelete,
};