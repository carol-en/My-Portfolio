const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Index extends React.Component {
    render() {
        return (
            <AppLayout title="Art Planner"> 
                    <div className=" planner-header  wrap">
                            <h1 className="display-4 text-uppercase font-weight-bold">Art Planner</h1>
                            <a href={`/planner/new`} className="btn btn-primary mb-5">Add Project</a>

                            <div className="d-flex justify-content-center flex-nowrap p-i-wrap">
                  
                                    {
                                        this.props.projects.map((project, i) => {
                                            return (
                                                <div className="index-project p-4  align-items-center">
                                                <h2>{project.title}</h2>
                                                <ul className="list-unstyled p-1">
                                                    <li key={i}><strong>Project Type:  </strong>{project.type}</li>
                                                    <li key={i}><strong>Date Started: </strong>{project.started}</li>
                                                    <li key={i}><strong>Status: </strong> {project.stage}</li>
                                                </ul>
                                                <a href={`/planner/${project._id}`}>View More</a>
                                            </div>
                                            )
                                        })
                                    }

                            </div>
                    </div>

            </AppLayout> 
        )
    }
}

module.exports = Index;