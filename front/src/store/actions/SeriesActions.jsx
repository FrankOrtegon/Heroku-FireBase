import {host, seriesConstants} from "../../utils/Constants";

export const getAllSeries = () => {
    return async (dispatch) => {
        dispatch({type: seriesConstants.GET_SERIES_REQUEST})
        fetch(host.GET_SERIES,)
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
        const seriesJson =JSON.stringify(series)
        console.log(seriesJson)
        fetch(host.POST_SERIES, {
            method: 'POST',
            body: seriesJson,
            headers:{
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => response.json())
            .then((json) => {
                console.log(json)
                dispatch({type: seriesConstants.POST_SERIES_SUCCESSFUL})
            }).catch((error) => {
            console.log(error)
            dispatch({
                type: seriesConstants.POST_SERIES_FAILURE,
                payload:{error:error}
            })
        })
    }
}

export const deleteSeries = (id) =>{
    return async (dispatch) => {
        dispatch({type: seriesConstants.DELETE_SERIES_REQUEST})
        fetch(host.DELETE_SERIES+id,{
            method:"DELETE"
        }).then(response => {
            console.log(response)
            dispatch({
                type: seriesConstants.DELETE_SERIES_SUCCESSFUL,
                payload: {id:id}
            })
        }).catch(error=>{
            console.log(error)
            dispatch({
                type: seriesConstants.DELETE_SERIES_FAILURE,
                payload: {error:error}
            })
        })
    }
}