import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import AddCart from "./Components/Shop/OrderReview";
import Header from "./Components/Header/Header";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/home">
            <Shop></Shop>
          </Route>
          <Route path="/card">
            <AddCart></AddCart>
          </Route>
          <Route path="/manageInventory">
            <ManageInventory></ManageInventory>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
