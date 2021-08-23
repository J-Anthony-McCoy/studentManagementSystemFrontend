import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateStudent } from "./pages/CreateStudent";
import { UpdateStudent } from "./pages/UpdateStudent";
import { DeleteStudent } from "./components/DeleteStudent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateStudent} />
            <Route path="/delete" component={DeleteStudent} />
            <Route path="/update/:id" component={UpdateStudent} />
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
