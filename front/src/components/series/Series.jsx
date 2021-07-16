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
<div classname="row ">
  <div classname="col-md-3 mx-auto">
    <div classname="card">
      <div classname="card-body">
        <h4 classname="card-title"> {element.nombre} </h4>        
        
        <p> {element.numeroTemporadas}  </p>
        <h5> {element.categoriaId}</h5>
        
        
      </div>
    </div>
  </div>
</div>
</div>


    )
}

export default Series