import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Home from "./Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Series from "./series/Series";
import CreateSeries from "./series/CreateSeries";

function App() {
  return (
      <Router>
          <Header/>
          <br/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path={"/series"} component={Series} />
              <Route exact path={"/add-series"} component={CreateSeries} />
              <Route path="*" component={NotFoundPage}/>
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
