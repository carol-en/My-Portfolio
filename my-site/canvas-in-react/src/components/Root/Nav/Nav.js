import React, { Component} from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Hello From Nav!</h3>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        )
    }
}

export default Nav;