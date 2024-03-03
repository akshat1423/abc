

import { axiosApiService } from "./axios";
const InventoryDetailAPIs = {

  InventoryDetailGet: async function(primaryKey){
    const response = await axiosApiService.get(`/admin_inventory_detail/${primaryKey}/`);
    return response.data;
  },
  InventoryDetailGetObject: async function(primaryKey){
    const response = await axiosApiService.get(`/admin_inventory_detail/${primaryKey}/`);
    return response.data;
  },
  InventoryDetailPatch: async function(primaryKey, patchData){
    const response = await axiosApiService.patch(`/admin_inventory_detail/${primaryKey}/`, patchData);
    return response.data;
  },
  InventoryDetailPut: async function(primaryKey, {
          productType,
          skuCode,
          manufacturerName,
          machineCost,
          productImage,
          productName,
          unit,
          category,
          tag,
          description,
          measurementUnit,
  }){
    const formData = new FormData();
         formData.append("productType", productType);
         formData.append("skuCode", skuCode);
         formData.append("manufacturerName", manufacturerName);
         formData.append("machineCost", machineCost);
         formData.append("productImage", productImage);
         formData.append("productName", productName);
         formData.append("unit", unit);
         formData.append("tag", tag);
         formData.append("description", description);
         formData.append("measurementUnit", measurementUnit);
         formData.append("category", category);
    const response = await axiosApiService.put(`/admin_inventory_detail/${primaryKey}/`, formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data;
  },

  InventoryDetailDelete: async function(primaryKey){
    const response = await axiosApiService.put(`/admin_inventory_detail/${primaryKey}/`);
    return response.data;
  },

}
export default InventoryDetailAPIs;
