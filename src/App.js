import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/js/all";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Home from "./pages/Home";

import { ModalProvider } from "./context/ModalContext";
import axios from "axios";

axios.interceptors.request.use(function (config) {
  config.url = `https://crud-spring-react.herokuapp.com/api${config.url}`;
  return config;
});

function App() {
  return (
    <ModalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clientes" component={Clients} />
        </Switch>
      </Router>
    </ModalProvider>
  );
}

export default App;
