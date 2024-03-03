import { axiosApiService } from "./axios";
const MachineListAPIs = {
  MachineListGet: async function(){
    const response = await axiosApiService.get(`/admin_machine_list/`);
    return response.data;
  },


  AddInventory: async function  ({
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
  }) {
     console.log('machine', 
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
          measurementUnit,);
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

     try{
         const response = await axiosApiService.post(`/admin_machine_list/`, formData, {
             headers: { "Content-Type": "application/x-www-form-urlencoded" },
         });
         return response;
     }catch(error){
         console.error("Error", error);
         return {};
     }
  },
}
export default MachineListAPIs;
