import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/js/all";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import { ClientsProvider } from "./context/ClientsContext";
import {ModalProvider} from "./context/ModalContext";

function App() {
  return (
    <ClientsProvider>
      <ModalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/clientes" component={Clients} />
          </Switch>
        </Router>
      </ModalProvider>
    </ClientsProvider>
  );
}

export default App;
