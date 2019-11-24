const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Show extends React.Component {
    render() {
        return (
            <AppLayout> 
            <a href="/planner" className="btn btn-link">Return to Index</a>
            <div className="bg-light p-5 show-pg">
                <h2 className="display-4 text-uppercase font-weight-bold mb-3">
                    {this.props.project.title}
                    <span class="ml-3 badge badge-primary">WIP</span>
                </h2>
                <a href={`/planner/${this.props.project._id}/edit`} class="btn btn-outline-primary mb-3">Edit Project</a>
                

                    <h3 className="display-5 text-uppercase">Info:</h3>
                    <div className="d-flex justify-content-around flex-fill flex-wrap">
                        <ul className="list-unstyled project-info">
                            <li><strong>Project Type: </strong>Personal</li>
                            <li><strong>Date Started: </strong> Nov 2019</li>
                            <li><strong>Stage: </strong>Sketches & studies</li>
                            <li><strong>Last Updated: </strong>Nov 21, 2019</li>
                            <li><strong>Status: </strong> WIP</li>
                            <li><strong>Format: </strong>Traditional</li>
                            <li><strong>Tools: </strong>Pencils, ink, copic markers</li>
                            <li><strong>Uploaded Online: </strong> No</li>
                            <li><strong>Uploaded To: </strong> N/A</li>
                        </ul>

                        <ul className="list-unstyled project-info">
                        <li><strong>Client: </strong>Tony</li>
                        <li><strong>Client Email: </strong> N/A</li>
                        <li><strong>Total Cost: </strong> N/A</li>
                        <li><strong>Payment Plan: </strong>NA</li>
                        <li><strong>Pay Type: </strong>N/A</li>
                        <li><strong>Deadline: </strong> 12/25/19</li>
                    </ul>
                    </div>
                    <h3 className="display-5 text-uppercase">Piece Details:</h3>
                    <section  className="blockquote p-3 descri">
                        9 x 11 bristol page, Ocelot piece inked and colored, Christmas gift for Tony. Won't be finished and mailed to by Christmas so it'll be received late. Studies and sketches already done, need to finalize reference gathering to start on initial sketch.
                    </section>
                    <form action={`/planner/?_method=DELETE`} method="POST" className="float-right"><input class="btn btn-outline-danger" type="submit" value="Delete Project" /></form>
            </div>

            </AppLayout> 
        )
    }
}

module.exports = Show;