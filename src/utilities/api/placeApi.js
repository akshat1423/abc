import { axiosApiService } from "./axios";

class Page {
    constructor(next, previous, results) {
        this._next = next;
        this._previous = previous;
        this._results = results;
    }
    _next = null;
    _previous = null;
    _results = [];

    async getNext() {
        //Return the next Page object.
        const { data } = await axiosApiService.get(this._next);
        return new Page(data.next, data.previous, data.results);
    }
    async getPrevious() {
        //Return the previous Page object.
        const { data } = await axiosApiService.get(this._previous);
        return new Page(data.next, data.previous, data.results);
    }
    getResults() {
        return this._results;
    }
}

const PlacesAPI = {
    getAll: async function (page_size = 10) {
        const response = await axiosApiService.get("/places/", {
            params: {
                page_size: page_size,
            },
        });
        return {
            count: response.data.count,
            page: new Page(
                response.data.next,
                response.data.previous,
                response.data.results
            ),
        };
    },
    getAllPlaceNamesAndID: async function (page_size = 10) {
        let places = [];
        let nextPageUrl = "/places/";

        while (nextPageUrl) {
            const response = await axiosApiService.get(nextPageUrl, {
                params: {
                    page_size: page_size,
                },
            });

            const placesInPage = response.data.results.map((place) => {
                return {
                    id: place.id,
                    name: place.name,
                };
            });
            places.push(...placesInPage);

            nextPageUrl = response.data.next;
        }

        return places;
    },
    getPage: async function (pageNo, pageSize) {
        const response = await axiosApiService.get("/places/", {
            params: {
                page: pageNo,
                page_size: pageSize,
            },
        });
        return response.data;
    },
    get: async function (id) {
        const response = await axiosApiService.get(`/places/${id}`);
        return response.data;
    },
    post: async function (
        name,
        location,
        longitude,
        latitude,
        scaleFactor,
        rotation,
        file
    ) {
        console.log(
            "Uploading",
            name,
            location,
            latitude,
            longitude,
            scaleFactor,
            rotation,
            file
        );
        const formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);
        formData.append("scaleFactor", scaleFactor);
        formData.append("rotation", rotation);
        formData.append("floor_plan", file);
        const response = await axiosApiService.post(`/places/`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    },
    update: async function (
        id,
        name,
        location,
        longitude,
        latitude,
        scaleFactor,
        rotation,
        file
    ) {
        console.log(
            "Updating",
            id,
            name,
            location,
            latitude,
            longitude,
            scaleFactor,
            rotation,
            file
        );
        const formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);
        formData.append("scaleFactor", scaleFactor);
        formData.append("rotation", rotation);
        if (file) {
            formData.append("floor_plan", file);
        }
        const response = await axiosApiService.patch(
            `/places/${id}`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );
        return response.data;
    },
    
    
   
    InventoryListGet: async function(){
        const response = await axiosApiService.get(`/admin_inventory_list/`);
        return response.data;
    },
    MachineListGet: async function(){
        const response = await axiosApiService.get(`/admin_machine_list/`);
        //console.log(response);
        return response;
    },
    EquipmentListGet: async function(){
        const response = await axiosApiService.get(`/admin_equipment_list/`);
        return response.data;
    },
    ReservationListGet: async function(){
        const response = await axiosApiService.get(`/admin_reservation_list/`);
        return response.data;
    },
    ReservationListPost: async function (
          studentName,
          date,
          timeInterval,
          machine,
          projectTitle,
          purpose,
    ) { 
        console.log(studentName, date, timeInterval, machine, projectTitle, purpose);
        const formData = new FormData();
        formData.append("name", studentName);
        formData.append("date", date);
        formData.append("time interval", timeInterval);
        formData.append("machine", machine);
        formData.append("project title", projectTitle);
        formData.append("purpose", purpose);

        const response = await axiosApiService.post(`/admin_reservation_list/`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    },
    

};

export default PlacesAPI;
