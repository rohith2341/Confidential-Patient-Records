import {
    MY_EMPLOYEE_FAIL,
    MY_EMPLOYEE_REQUEST,
    MY_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAIL,
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    CLEAR_ERRORS,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAIL,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAIL,
} from 'store/constant/employeeConstant';

export const addEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };

        case ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                employee: action.payload
            };

        case ADD_EMPLOYEE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
export const myEmployeeReducer = (state = { orders: null, isUpdated: false }, action) => {
    switch (action.type) {
        case MY_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case MY_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            };
        case MY_EMPLOYEE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case UPDATE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }
};


export const deleteEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: true
            };
        case DELETE_EMPLOYEE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};

// Reduce

export const updateEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: true,
                employee: action.payload
            };
        case UPDATE_EMPLOYEE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
