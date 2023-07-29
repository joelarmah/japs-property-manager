import { CREATE_PROPERTY, CREATE_PROPERTY_FAILED, CREATE_PROPERTY_SUCCESS } from "./constants";

const INIT_STATE = {
    property: [],
    loading: false,
};

const Property = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_PROPERTY:
            return { ...state, loading: true };
        case CREATE_PROPERTY_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: null };
        case CREATE_PROPERTY_FAILED:
            return { ...state, error: action.payload, loading: false };
        default:
            return { ...state };
    }
};

export default Property;