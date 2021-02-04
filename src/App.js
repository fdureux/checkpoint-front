import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import Bookshelves from "./components/Bookshelves";
import Discover from "./components/Discover";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profil" component={Profile} />
        <Route exact path="/bibliotheque" component={Bookshelves} />
        <Route exact path="/decouverte" component={Discover} />
      </Switch>
    </div>
  );
}

export default App;
