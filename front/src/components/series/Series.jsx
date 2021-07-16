import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllSeries} from "../../store/actions/SeriesActions";

const Series = () => {

    const series = useSelector(state => state.series)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSeries())
    }, [])

    console.log()

    return (
        <div className=" container text-center ">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <h1>Series</h1>
                    {series.series.map(element => {
                        return (
                            <div>
                                {element.title}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Series