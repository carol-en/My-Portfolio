const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Edit extends React.Component {
    render () {
        return (
            <AppLayout title="Edit Page">
                <p>Edit Page</p>
            </AppLayout>
        )
    }
}

module.exports = Edit;