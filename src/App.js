import "./App.scss";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import DetailsPage from "./pages/DetailsPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={(props) => <MainPage {...props} />} />
        <Route path="/order" component={(props) => <OrderPage {...props} />} />
        <Route
          path="/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <DetailsPage itemId={id} />;
          }}
        />
      </Router>
    </div>
  );
}

export default App;
