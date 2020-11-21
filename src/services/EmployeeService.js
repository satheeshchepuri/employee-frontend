import axios from 'axios';

const EMP_BASE_URL = "http://localhost:8081/api/v1/employees";
class EmployeeService {

    getEmployees(){
        return axios.get(EMP_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMP_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMP_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, empId){
        return axios.put(EMP_BASE_URL + '/' + empId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMP_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()