import {host, seriesConstants} from "../../utils/Constants";

export const getAllSeries = () => {
    return async (dispatch) => {
        dispatch({type: seriesConstants.GET_SERIES_REQUEST})
        fetch(host.GET_SERIES, )
            .then(response => response.json())
            .then(json => {
                if (json.length > 0) {
                    dispatch({
                        type: seriesConstants.GET_SERIES_SUCCESSFUL,
                        payload: {
                            series: json
                        }
                    })
                } else {
                    dispatch({
                        type: seriesConstants.GET_SERIES_FAILURE,
                        payload: {
                            error: "No series found"
                        }
                    })
                }
            }).catch(error => {
            console.log(error)
            dispatch({
                type: seriesConstants.GET_SERIES_FAILURE,
                payload: {
                    error: error
                }
            })
        })
    }
}

export const addSeries = (series) => {
    return async (dispatch) => {
        dispatch({type: seriesConstants.POST_SERIES_REQUEST})

    }
}