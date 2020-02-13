import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";
import Canvas from "./Canvas";
import About from "./About";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import Contact from "./Contact";

class Root extends Component {
    render() {
        return (
            <section>
                <h1>This is the root component</h1>
                <Route component ={Canvas} exact path="/" />
                <Route component ={About} exact path="/about" />
                <Route component ={Portfolio} path="/portfolio" />
                <Route component ={Gallery} path="/gallery" />
                <Route component ={Contact} exact path="/contact" />
            </section>
        )
    }
}


export default Root