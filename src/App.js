import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Header from "./Header"

function App() {
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
