import React, { Component } from "react";
import {Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Nav from "./Nav";

class Root extends Component {
    render() {
        return (
            <section>
                <Nav/ >
                <h1>This is the root component</h1>
                <Switch>
                    <Route component ={About} exact path="/about" />
                    <Route component ={Portfolio} exact path="/portfolio" />
                    <Route component ={Gallery} path="/gallery" />
                    <Route component ={Contact} exact path="/contact" />
                    <Route component ={Home} exact path="/" />
                </Switch>
            </section>
        )
    }
}


export default Root