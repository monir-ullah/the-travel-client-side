// This is use for Import Components and React Router from React router DOm

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AddService from "./pages/AddService/AddService";
import Home from "./pages/Home/Home";
import ManageAllOrders from "./pages/ManageAllOrders/ManageAllOrders";
import Myorders from "./pages/MyOrders/Myorders";
import PlaceOrder from "./pages/PlaceOder/PlaceOrder";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Footer from "./pages/Shared/Footer/Footer";
import Header from './pages/Shared/Header/Header';
import Login from "./pages/Shared/Login/Login";
import TourDestination from "./pages/TourDestination/TourDestination";

function App() {
  return (
    <div >
      <AuthProvider>

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/addService">
            <AddService></AddService>
          </Route>
          <Route exact path="/tourDestination">
            <TourDestination></TourDestination>
          </Route>
          <PrivateRoute path="/offering/:serviceId">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path="/manageAllOrder">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <Myorders></Myorders>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
