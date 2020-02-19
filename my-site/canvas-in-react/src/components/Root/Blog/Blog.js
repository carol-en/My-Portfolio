import React, { Component } from "react";
import * as contentful from 'contentful';
import { Link } from "react-router-dom";

class Blog extends Component {
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
          client.getEntries({
              "content_type": "blogPost"
          })
            .then(entries => this.setState({ entries: entries.items }))

    }
    render() {
        let entries = this.state.entries;
        // console.log("entries:", entries);
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
                        {/* <h2><Link to= {`/blog/${entry.fields.slug}`}>{entry.fields.title}</Link></h2> */}
                        <h2><Link to= {{
                            pathname: `/blog/${entry.fields.slug}`,
                            state: {
                                name: "ughdtgfdkhgtr"
                            }
                        }}>{entry.fields.title}</Link></h2>   
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