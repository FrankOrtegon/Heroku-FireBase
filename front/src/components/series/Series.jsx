import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllSeries} from "../../store/actions/SeriesActions";

const Series = () => {

    const series = useSelector(state => state.series)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSeries())
    }, [])

    return (
        <div className="col-md-10 mx-auto">
            <h1 className={"text-center mb-4"}>Series</h1>
            <div className="row ">
                {series.series.map(element => {
                    return (
                        <div className="col-md-3 mx-auto" key={element.id}>
                            <div className="card">
                                <div className="card-body">
                                    <div key={element.id}>
                                        <h4 className="card-title"> {element.nombre} </h4>
                                        <h5> {element.categoriaId}</h5>
                                        <p> {element.numeroTemporadas}  </p>
                                        <img src={element.urlImagen} className={"card-img"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Series