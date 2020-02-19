import React, { Component } from "react";
// import Canvas from "../Canvas";
import * as contentful from 'contentful';


class Home extends Component {
    state = {
        entries: []
    }
    componentDidMount () {
        const client = contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: "oe5zw42azvek",
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: "jWh_juUQ_Aua6Oe2w24RTTPdX4j3eYP3BjPvFs4RSVs"
          });
          // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
          client.getEntries()
            .then(entries => this.setState({ entries: entries.items }))

    }
    render() {
        let entries = this.state.entries;
        console.log("entries:", entries);
        const entry = entries.map((entry, i) => {
            if(entry.sys.contentType.sys.id !== "person") {
                return (
                    <ul>
                        <li key={i}>
                            <h2>{entry.fields.title}</h2>
                            <h3>{entry.fields.name}</h3>
                            <h4>{entry.fields.publishDate}</h4>
                            <blockquote>{entry.fields.body}</blockquote>
                        </li>
                    </ul>
                )
            }
        
        });
        
        return (
            <>
                <h1>Hello from Home Component!</h1>
                {/* <Canvas /> */}
                {entry}
            </>
        )
    }
}

export default Home;