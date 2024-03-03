import axios from 'axios';
import { API_URL } from './urls';

async function AdminLocationListGet() {
    try {
      const response = await axios.get(API_URL+'admin_location_list/get-endpoint');
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminLocationListPost(postData) {
    try {
      const response = await axios.post(API_URL+'admin_location_list/post-endpoint', postData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
  export{
    AdminLocationListGet,
    AdminLocationListPost, };
  
