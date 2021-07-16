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
       
        
        <div className="col-md-10 mx-auto">
            <div className="row ">
            <div className="col-md-3 mx-auto">
                <div className="card">
                <div className="card-body">
                <h1>Series</h1>
                    {series.series.map(element => {
                        return (
                            <div key={element.id}>
                                <h4 className="card-title"> {element.nombre} </h4>  
                                <h5> {element.categoriaId}</h5>   
                                <p> {element.numeroTemporadas}  </p>
                                
                            </div>
                        )
                    })}   
            </div>
            </div>
        </div>
        </div>
        </div>


    )
}

export default Series