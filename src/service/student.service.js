import axios from "axios";

const API_URL="http://localhost:8080";

class StudentService{

    saveStudent(student){
        return axios.post(API_URL+"/registration",student);
    }

    getStudentById(id){
        return axios.get(API_URL+"/"+id);
    }

    // deleteProduct(id){
    //     return axios.get(API_URL+"/appointments/"+id);
    // }

    login(loginDetails){
        return axios.post(API_URL+"/login",loginDetails);
    }
    
    getStudentDetailsById(id){
        return axios.get(API_URL+"/appointment/"+id);
    }

    saveAppointment(appointment,username){
        return axios.post(API_URL+"/newAppointment/"+username, appointment);
    }

    updateAppointment(appointment, id){
        return axios.post(API_URL+"/setDate/"+id, appointment);
    }

    getAppointmentById(id){
        return axios.get(API_URL+"/getAppointment/"+id);
    }

    updateSlot(appointment, id){
        return axios.post(API_URL+"/setSlot/"+id, appointment);
    }
}
export default new StudentService();