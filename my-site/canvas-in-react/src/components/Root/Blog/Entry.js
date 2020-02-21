import React, { Component } from "react";
import client from "../contentful";

class Entry extends Component {
    state = {
        entry: null
    }

    componentDidMount() {
        const slug = this.props.match.params.blogPost;
          client.getEntries({
              content_type: "blogPost",
              'fields.slug[match]': slug,
              limit: 1
          })
            .then(entry => this.setState({ entry: entry.items[0] }))
            .catch(console.error)

    }

    article() {
        let entry = this.state.entry;
        if(!entry) {
            return <h1>Loading...</h1>
         } else {
              return (
                 <li key= {entry.sys.id}>
                     <h2>{entry.fields.title}</h2> 
                     <h3>{entry.fields.name}</h3>
                     <h4>{entry.fields.publishDate}</h4>
                     <blockquote>{entry.fields.body}</blockquote>
                 </li>
             )
         }
    }
    render() {
        let entry = this.article();
        return (
            <>
            <h1>Hello from Entry</h1>
                <ul>
                    {entry}
                </ul>
            </>
        )
    }
}

export default Entry;