import {useState} from "react";
import {useDispatch} from "react-redux";
import {addSeries} from "../../store/actions/SeriesActions";
import {Redirect} from "react-router-dom";

const CreateSeries = () => {

    const [name, setName] = useState('');
    const [seasons, setSeasons] = useState('');
    const [category, setCategory] = useState('60f083d8eb32e255d5c99a50');
    const [urlImage, setUrlImage] = useState('');

    const dispatch = useDispatch();

    const submitSeries = () => {
        if(name.length > 3 && name.length < 20 && parseInt(seasons) > 0 && parseInt(seasons) < 30 && urlImage !== ""){
            const seriesObject = {
                nombre: name,
                numeroTemporadas: seasons,
                categoriaId: category,
                urlImagen: urlImage
            }

            dispatch(addSeries(seriesObject))

            setName('');
            setSeasons('');
            setCategory('terror');
            setUrlImage('');

            window.location = '/series';
        }

    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Form to create series</h3>
                </div>
                <div className="card-footer">
                    <label className={"m-3"}>Name</label>
                    <input placeholder={"Name"}
                           className={"form-control"}
                           name={"name"}
                           onChange={(event => setName(event.target.value))}
                           value={name}/>
                    <label className={"m-3"}>Category</label>
                    <select className="form-select form-control"
                            name={"category"}
                            value={category}
                            onChange={(event => setCategory(event.target.value))}>
                        <option value="60f083d8eb32e255d5c99a50">Terror</option>
                        <option value="60f083ceeb32e255d5c99a4f">Action</option>
                        <option value="60f0a640bded8d6c0801de0e">Comedy</option>
                        <option value="60f083f1eb32e255d5c99a52">Anime</option>
                        <option value="60f083afeb32e255d5c99a4e">Science fiction</option>
                    </select>
                    <label className={"m-3"}>Number of seasons</label>
                    <input type={"number"}
                           placeholder={"Seasons"}
                           className={"form-control"}
                           name={"seasons"}
                           onChange={(event => setSeasons(event.target.value))}
                           value={seasons}/>
                    <label className={"m-3"}>URL Image</label>
                    <input placeholder={"URL . . ."}
                           className={"form-control"}
                           name={"urlImage"}
                           onChange={(event => setUrlImage(event.target.value))}
                           value={urlImage}/>
                    <div className="text-center">
                        <button onClick={submitSeries} className="btn btn-success px-5 mt-4 ">Add <i
                            className="bi bi-plus-square"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSeries