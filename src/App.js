import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";

function App() {
  return (
    <Router>
      <Switch>
        {/* switch는 route(= url)를 찾아주는 역활 */}
        <Route path="/">
          {/* Home Route를 render 해줌 */}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
