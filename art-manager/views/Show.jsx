const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');

class Show extends React.Component {
    render () {
        return (
            <AppLayout title="Show Page">
                <p>Show Page!</p>
            </AppLayout>
        )
    }
}

module.exports = Show;