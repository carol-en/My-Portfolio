import React, { Component } from "react";
import * as contentful from 'contentful';

class Entry extends Component {
    state = {
        entry: []
    }

    componentDidMount () {
        const client = contentful.createClient({
            space: "oe5zw42azvek",
            accessToken: "jWh_juUQ_Aua6Oe2w24RTTPdX4j3eYP3BjPvFs4RSVs"
          });
        //   client.getEntry('<entry_id>')
        //     .then((entry) => console.log(entry))
        //     .catch(console.error)

    }
    render() {
        console.log("PROPS: ", this.props);

        //TRYING TO PASS PROPS FROM LINK in BLOG to ENTRY
        return (
            <h1>Hello from Entry</h1>
        )
    }
}

export default Entry;