import axios from 'axios';
import { API_URL } from './urls';

async function AdminReservationListGet() {
    try {
      const response = await axios.get(API_URL+'admin_reservation_list/get-endpoint');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminReservationListPost(postData) {
    try {
      const response = await axios.post(API_URL+'admin_reservation_list/post-endpoint', postData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
  export{
    AdminReservationListGet,
    AdminReservationListPost, };
  
