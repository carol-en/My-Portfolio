import React, { Component } from "react";
import client from "../contentful";
import { Link } from "react-router-dom";

class Blog extends Component {
    state = {
        entries: []
    }
    componentDidMount () {

          client.getEntries({
              "content_type": "blogPost"
          })
            .then(entries => this.setState({ entries: entries.items }))

    }
    render() {
        let entries = this.state.entries;
        const entry = entries.map((entry, i) => {
           if(!entry) {
                return (
                    <li>
                        <h2>Loading...</h2>
                    </li>
                )
            } else { 
                return (
                    <li key={i}>
                        <h2><Link to= {`/blog/${entry.fields.slug}`}>{entry.fields.title}</Link></h2> 
                        <h3>{entry.fields.name}</h3>
                        <h4>{entry.fields.publishDate}</h4>
                        <blockquote>{entry.fields.body}</blockquote>
                    </li>
            )
            }
        
        });
        return (
            <>
                <h3>Hello from Blog</h3>
                <ul>
                    {entry}
                </ul>
            </>
        )
    }
}

export default Blog;