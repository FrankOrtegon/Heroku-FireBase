import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <div className=" container text-center ">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <br/><br/>
                    <h1 className="cover-heading mt-5 font-weight-bold">Welcome to Serie App <i
                        className="bi bi-controller" /></h1>
                        <img src={"https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/Best-tv-shows-Netflix-V3.jpg"} />
                    <h4 className={"color-black mt-5"}>Here you can add and see a list of recommended series</h4>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}

export default Home