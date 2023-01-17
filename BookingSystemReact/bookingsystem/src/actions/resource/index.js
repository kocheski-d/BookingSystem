import { apiData } from "../../apis/apiData";

//Fetch - all keys
export const fetchResources = () => {
    return async function (dispatch, getState){

        dispatch({
            type: "FETCHING_RESOURCES",
            payload: true
        });

        await apiData.get(`api/resource`, {
            headers: {}
        })
        .then((response) => {
            if (response.status === 200) {
                dispatch({
                    type: "FETCH_RESOURCES",
                    payload: {
                        data: response.data.data.map((resource) => {
                            return {
                                id: resource.id,
                                name: resource.name,
                                quantity: resource.quantity
                            }
                        }),
                        message: response.data.message
                    }
                });
            } else {
                dispatch({
                    type: "GET_MESSAGE",
                    payload: {
                        message: response.data.message,
                    }
                });
            }
        }).catch(() => {
            dispatch({
                type: "GET_MESSAGE",
                payload: {
                    message: 'Internal Error',
                }
            });
        });

        dispatch({
            type: "FETCHING_RESOURCES",
            payload: false
        });
        
    }
};