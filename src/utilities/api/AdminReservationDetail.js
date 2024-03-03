import axios from 'axios';
import { API_URL } from './urls';

async function AdminReservationDetailGet(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_reservation_detail/get-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminReservationDetailGetObject(primaryKey) {
    try {
      const response = await axios.get(API_URL+'admin_reservation_detail/get-endpoint/${primaryKey}');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  

async function AdminReservationDetailPatch(primaryKey,patchData) {
    try {
      const response = await axios.patch(API_URL+'admin_reservation_detail/patch-endpoint/${primaryKey}', patchData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
async function AdminReservationDetailPut(primaryKey,putData) {
    try {
      const response = await axios.put(API_URL+'admin_reservation_detail/put-endpoint/${primaryKey}', putData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }   
  
async function AdminReservationDetailDelete(primaryKey) {
    try {
      const response = await axios.delete(API_URL+'admin_reservation_detail/delete-endpoint/${primaryKey}');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  } 

  export{
    AdminReservationDetailGet,
    AdminReservationDetailGetObject,
    AdminReservationDetailPatch,
    AdminReservationDetailPut,
    AdminReservationDetailDelete,
};