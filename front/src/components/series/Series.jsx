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
                                        <h5> 
                                            {(element.categoriaId== "60f083d8eb32e255d5c99a50")?Terror:null}
                                            {(element.categoriaId== "60f083ceeb32e255d5c99a4f")?Action:null}
                                            {(element.categoriaId=='60f0a640bded8d6c0801de0e')?Comedy:null}
                                            {(element.categoriaId=='60f083f1eb32e255d5c99a52')?Anime:null}
                                            {(element.categoriaId=='60f083afeb32e255d5c99a4e')?Sciencefiction:null}
                                        </h5>
                                        <p> {element.numeroTemporadas}  </p>
                                        <img src={element.urlImagen} className={"card-img"}/>
                                        <button type="submit" className="btn btn-primary " style="width:40px; height:40px; float:right">
                                        <i class="bi bi-pencil-square"></i>
                                        </button>
                                        <button type="submit" className="btn btn-danger" style="width:40px; height:40px; float:right">
                                        <i class="bi bi-trash"></i>
                                        </button>

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