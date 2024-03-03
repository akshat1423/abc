import axios from 'axios';
import { API_URL } from './urls';

async function AdminUserGroupListGet() {
    try {
      const response = await axios.get(API_URL+'admin_user_group_list/');
      const data=await response.data;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }

async function AdminUserGroupListPost(postData) {
    try {
      const response = await axios.post(API_URL+'admin_user_group_list/post-endpoint', postData);
      const data=await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return {};
    }
  }  
  
  export{
    AdminUserGroupListGet,
    AdminUserGroupListPost, };