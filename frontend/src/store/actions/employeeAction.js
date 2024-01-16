import axios from 'axios';
import {
    MY_EMPLOYEE_FAIL,
    MY_EMPLOYEE_REQUEST,
    MY_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAIL,
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAIL,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAIL,
    CLEAR_ERRORS
} from 'store/constant/employeeConstant';
import { toast } from 'react-toastify';

axios.defaults.withCredentials = true;
// Add Employee
export const addEmployee = (userData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_EMPLOYEE_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };
        const y = {
            personalDetails: {
                fullName: userData.fullName,
                dob: userData.dob,
                sex: userData.sex,
                bloodGroup: userData.bloodGroup,
                phoneNumber: userData.phoneNumber,
                alternateNumber: userData.alternateNumber,
                insuranceCarrier: userData.insuranceCarrier,
                policyNumber: userData.policyNumber,
                pastConditions: userData.pastConditions,
                surgeries: userData.surgeries
            },
            medications: {
                name: userData.name,
                dosage: userData.dosage,
                frequency: userData.frequency,
                physician: userData.physician
            }
        };
        const { data } = await axios.post(' http://localhost:4000/api/v1/employees/new', y, config);
        toast.success('Details Submitted Successfully!');
        dispatch({
            type: ADD_EMPLOYEE_SUCCESS,
            payload: data.user
        });
        dispatch({ type: ADD_EMPLOYEE_REQUEST });
    } catch (error) {
        dispatch({
            type: ADD_EMPLOYEE_FAIL,
            payload: error
        });
    }
};

// Get currently logged in user employee list
export const myEmployee = (page, limit, keyword) => async (dispatch) => {
    try {
        dispatch({ type: MY_EMPLOYEE_REQUEST });

        const { data } = await axios.get(
            `http://localhost:4000/api/v1/employees/mylist?page=${page}${limit && '&limit=' + limit}${
                keyword ? '&keyword=' + keyword : ''
            }&searchBy=${'personalDetails.fullName'}`,
            {
                withCredentials: true
            }
        );
        dispatch({
            type: MY_EMPLOYEE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: MY_EMPLOYEE_FAIL,
            payload: error.response
        });
    }
};

// Update Employee
export const updateEmployee = (employeeId, updatedData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_EMPLOYEE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        };

        const { data } = await axios.put(`http://localhost:4000/api/v1/employee/${employeeId}`, updatedData, config);

        dispatch({
            type: UPDATE_EMPLOYEE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: UPDATE_EMPLOYEE_FAIL,
            payload: error.response.data.error
        });
    }
};
// Delete Employee
export const deleteEmployee = (employeeId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_EMPLOYEE_REQUEST });

        const config = {
            withCredentials: true
        };

        const { data } = await axios.delete(`http://localhost:4000/api/v1/employee/${employeeId}`, config);

        dispatch({
            type: DELETE_EMPLOYEE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DELETE_EMPLOYEE_FAIL,
            payload: error.response.data.error
        });
    }
};
// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};
