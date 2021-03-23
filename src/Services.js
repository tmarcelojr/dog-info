import http from "../http-crud";

class DogServices {
    

    create(data) {
        return http.post("/dog", data);
    }

    update(id, data) {
        return http.put(`/dog/${id}`, data);
    }

    delete(id) {
        return http.delete(`/dog/${id}`);
    }

    
}

export default DogServices;