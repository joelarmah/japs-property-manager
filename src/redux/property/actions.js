import { CREATE_PROPERTY, CREATE_PROPERTY_FAILED, CREATE_PROPERTY_SUCCESS } from "./constants";

export const createProperty = (property) => ({
    type: CREATE_PROPERTY,
    payload: property,
});

export const createPropertySuccess = (property) => ({
    type: CREATE_PROPERTY_SUCCESS,
    payload: property,
});

export const createPropertyFailed = (error) => ({
    type: CREATE_PROPERTY_FAILED,
    payload: error,
});