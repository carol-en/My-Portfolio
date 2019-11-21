const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Index extends React.Component {
    render() {
        return (
            <AppLayout title="Index Page"> 
                <p>Hello World!</p>
            </AppLayout> 
        )
    }
}

module.exports = Index;