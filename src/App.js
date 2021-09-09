import "./App.scss";
import MainPage from "./pages/MainPage";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/order" component={OrderPage} />
      </Router>
    </div>
  );
}

export default App;
