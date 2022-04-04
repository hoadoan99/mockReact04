/** @format */

import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddNew from "./components/Form/Add";
import Edit from "./components/Form/Add";
import Error from "./pages/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoutes from "./pages/PrivateRoutes";
import AuthWrapper from "./pages/AuthWrapper";
import Navbar from "./components/Navbar";
function App() {
  return (
    <AuthWrapper>
      <Navbar />
      <Router>
        <Switch>
          <PrivateRoutes path="/" exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoutes>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route>
            <AddNew></AddNew>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
