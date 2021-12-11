import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home.jsx";
import Services from "./components/pages/Services.jsx";
import Products from "./components/pages/Products.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import Login from "./components/pages/login.jsx";
function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/products" component={Products} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/login" exact component={Login} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
