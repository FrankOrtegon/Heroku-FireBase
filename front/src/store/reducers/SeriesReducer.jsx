import {seriesConstants} from "../../utils/Constants";

const initState = {
    series:[],
    loading: false,
    error: null
}

const seriesReducer = (state = initState, action) => {
    switch (action.type) {
        case seriesConstants.GET_SERIES_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case seriesConstants.GET_SERIES_SUCCESSFUL:
            state={
                ...state,
                series: action.payload.series,
                loading: false
            }
            break;
        case seriesConstants.GET_SERIES_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case seriesConstants.POST_SERIES_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case seriesConstants.POST_SERIES_SUCCESSFUL:
            state={
                ...state,
                loading: false,
                error:null
            }
            break;
        case seriesConstants.POST_SERIES_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case seriesConstants.DELETE_SERIES_REQUEST:
            state={
                ...state,
                loading: true
            }
            break;
        case seriesConstants.DELETE_SERIES_SUCCESSFUL:
            state={
                ...state,
                loading: false,
                error: null
            }
            break;
        case seriesConstants.DELETE_SERIES_FAILURE:
            state={
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        default:
            break;
    }
    return state;
}
export default seriesReducer