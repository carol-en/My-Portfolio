const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Show extends React.Component {
    render() {
        return (
            <AppLayout title={this.props.project.title}> 
            
            <div className="container pages-wrapper">
            <a href="/planner" className="btn btn-link">Return to Index</a>
                <h2 className="display-4 text-uppercase  mb-3 text-warning  p-2">
                    {this.props.project.title}
                </h2>
                <a href={`/planner/${this.props.project._id}/edit`} class="btn btn-outline-primary mb-3">Edit Project</a>
                

                    <h3 className="display-5 text-uppercase text-warning">Info:</h3>
                    <div className="d-flex justify-content-around flex-fill flex-wrap">
                        <ul className="list-unstyled project-info">
                            <li><strong>Project Type: </strong>{this.props.project.type}</li>
                            <li><strong>Date Started: </strong>{this.props.project.started}</li>
                            <li><strong>Stage: </strong>{this.props.project.stage}</li>
                            <li><strong>Started On: </strong>{this.props.project.started}</li>
                        <li><strong>Format: </strong>{this.props.project.format}</li>
                            <li><strong>Tools: </strong>{this.props.project.tools}</li>
                            <li><strong>Uploaded Online: </strong> {this.props.project.uploaded}</li>
                            <li><strong>Uploaded To: </strong> {this.props.project.uploadedTo}</li>
                        </ul>

                        <ul className="list-unstyled project-info">
                        <li><strong>Client: </strong>{this.props.project.client}</li>
                        <li><strong>Client Email: </strong> {this.props.project.clientEmail}</li>
                        <li><strong>Total Cost: </strong> {this.props.project.cost}</li>
                        <li><strong>Payment Plan: </strong>{this.props.project.paymentPlan}</li>
                        <li><strong>Pay Type: </strong>{this.props.project.payType}</li>
                        <li><strong>Deadline: </strong> {this.props.project.deadline}</li>
                    </ul>
                    </div>
                    <h3 className="display-5 text-uppercase text-warning">Piece Details:</h3>
                    <section  className="blockquote p-3 descri">
                    {this.props.project.details}
                    </section>
                    <form action={`/planner/${this.props.project._id}?_method=DELETE`} method="POST" className="float-right"><input class="btn btn-outline-warning" type="submit" value="Delete Project" /></form>
            </div>

            </AppLayout> 
        )
    }
}

module.exports = Show;