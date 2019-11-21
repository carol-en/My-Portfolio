const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class New extends React.Component {
    render() {
        return (
            <AppLayout title="New Page"> 
                <p>Hello World!</p>
            </AppLayout> 
        )
    }
}

module.exports = New;