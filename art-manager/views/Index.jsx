const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Index extends React.Component {
    render() {
        return (
            <AppLayout> 
                    <div className="jumbotron">
                        <h1 className="display-4 text-uppercase font-weight-bold">Art Planner</h1>
                        <a href={`/planner/new`} class="btn btn-primary mb-3">Add Project</a>
                    </div>

                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="project p-4">
                            <h2>Christmas Gift</h2>
                            <ul className="list-unstyled p-1">
                                <li><strong>Project Type:  </strong>Personal</li>
                                <li><strong>Date Started: </strong>Nov, 2019</li>
                                <li><strong>Last Updated: </strong>Nov 21, 2019</li>
                                <li><strong>Status: </strong> WIP</li>
                            </ul>
                            <a href="#" className="btn btn-link">View More</a>
                        </div>

                        <div className="project p-4">
                            <h2>Christmas Gift</h2>
                            <ul className="list-unstyled p-1">
                                <li><strong>Project Type:  </strong>Personal</li>
                                <li><strong>Date Started: </strong>Nov, 2019</li>
                                <li><strong>Last Updated: </strong>Nov 21, 2019</li>
                                <li><strong>Status: </strong> WIP</li>
                            </ul>
                            <a href="#" className="btn btn-link">View More</a>
                        </div>

                        <div className="project p-4">
                            <h2>Christmas Gift</h2>
                            <ul className="list-unstyled p-1">
                                <li><strong>Project Type:  </strong>Personal</li>
                                <li><strong>Date Started: </strong>Nov, 2019</li>
                                <li><strong>Last Updated: </strong>Nov 21, 2019</li>
                                <li><strong>Status: </strong> WIP</li>
                            </ul>
                            <a href="#" className="btn btn-link">View More</a>
                        </div>

                        <div className="project p-4">
                            <h2>Christmas Gift</h2>
                            <ul className="list-unstyled p-1">
                                <li><strong>Project Type:  </strong>Personal</li>
                                <li><strong>Date Started: </strong>Nov, 2019</li>
                                <li><strong>Last Updated: </strong>Nov 21, 2019</li>
                                <li><strong>Status: </strong> WIP</li>
                            </ul>
                            <a href="#" className="btn btn-link">View More</a>
                        </div>

                        <div className="project p-4">
                            <h2>Christmas Gift</h2>
                            <ul className="list-unstyled p-1">
                                <li><strong>Project Type: </strong> Personal</li>
                                <li><strong>Date Started: </strong>Nov, 2019</li>
                                <li><strong>Last Updated: </strong>Nov 21, 2019</li>
                                <li><strong>Status: </strong> WIP</li>
                            </ul>
                            <a href="#" className="btn btn-link">View More</a>
                        </div>
                    </div>
            </AppLayout> 
        )
    }
}

module.exports = Index;