import { Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Home from "../Home";
import About from "../About";
import Portfolio from "../Portfolio";
import Gallery from "../Gallery";
import Blog from "../Blog";
import Entry from "../Blog/Entry";
import Contact from "../Contact";

class RouterReact extends Component {
    render() {
        return (
        <>
        <Switch>
            <Route component ={About} exact path="/about" />
            <Route component ={Portfolio} exact path="/portfolio" />
            <Route component ={Gallery} path="/gallery" />
            <Route component ={Entry} path="/blog/:blogPost" />
            <Route component ={Blog} exact path="/blog" />
            <Route component ={Contact} exact path="/contact" />
            <Route component ={Home} exact path="/" />
        </Switch>
        </>
        )
    }
}

export default RouterReact;