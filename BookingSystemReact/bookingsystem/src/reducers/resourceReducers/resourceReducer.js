const initialState = {
    data: [],
    LOADING: false,
    message: '',
}

const resourceReducer = (state = initialState, action) => {
    if (action.type === "FETCH_RESOURCES"){
        return {...state, data: action.payload.data, message: action.payload.message };
    }

    if (action.type === "FETCHING_RESOURCES"){
        return { ...state, LOADING: action.payload };
    }

    if (action.type === "GET_MESSAGE"){
        return {...state, data: [...state.data, action.payload.data], message: action.payload.message };
    }
    
    return state;
}

export default resourceReducer;