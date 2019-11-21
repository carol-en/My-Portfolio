const React = require("react");
const AppLayout = require("./layout/AppLayout.jsx");

class Index extends React.Componennt {
    render () {
        return (
            <AppLayout title="Index">
            <p>Hello World!</p>    

            </AppLayout>
        )
    }
}

module.exports = Index;