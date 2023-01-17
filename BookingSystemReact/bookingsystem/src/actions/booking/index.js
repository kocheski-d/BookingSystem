import { apiData } from "../../apis/apiData";

//Fetch - all keys
export const resourceBooking = (resource) => {
    return async function (dispatch, getState){

        dispatch({
            type: "REQUESTING_BOOKING",
            payload: true
        });

        await apiData.post(`api/booking/create`, resource)
        .then((response) => {
            dispatch({
                type: "REQUESTED_BOOKING",
                payload: {
                    message: response.data.message,
                    succeeded: response.data.succeeded
                }
            });
        }).catch((response) => {
            dispatch({
                type: "REQUESTED_BOOKING",
                payload: {
                    message: response.response.data.Message ?? "Invalid request, check input fields",
                    succeeded: false,
                }
            });
        });

        dispatch({
            type: "REQUESTING_BOOKING",
            payload: false
        });
        
    }
};