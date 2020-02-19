import React, { Component } from "react";
import RouterReact from "./RouterReact/";
import Nav from "./Nav";

class Root extends Component {
    render() {
        return (
            <section>
                <Nav/ >
                <h1>This is the root component</h1>
                <RouterReact />
            </section>
        )
    }
}


export default Root;