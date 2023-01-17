const initialState = {
    message: '',
    success: true,
    loading: false,
}

const bookingReducer = (state = initialState, action) => {
    if (action.type === "REQUESTING_BOOKING"){
        return {...state, loading: action.payload };
    }

    if (action.type === "REQUESTED_BOOKING"){
        return { ...state, success: action.payload.succeeded, message: action.payload.message };
    }
    
    return state;
}

export default bookingReducer;