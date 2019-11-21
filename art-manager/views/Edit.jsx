const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Edit extends React.Component {
    render() {
        return (
            <AppLayout title="Edit Page"> 
                <p>Hello World!</p>
            </AppLayout> 
        )
    }
}

module.exports = Edit;