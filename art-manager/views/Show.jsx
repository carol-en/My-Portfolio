const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Show extends React.Component {
    render() {
        return (
            <AppLayout> 
            <div className="container w-5 ">
                <a href="/planner" className="btn btn-link">Return to Index</a>
                <div className="bg-light p-5 show-pg">
                    <h2 className="display-4 text-uppercase font-weight-bold mb-3">
                        Christmas Gift 
                        <span class="ml-3 badge badge-primary">WIP</span>
                    </h2>
                    <a href={`/planner/edit`} class="btn btn-outline-primary mb-3">Edit Project</a>
                    

                        <h3 className="display-5 text-uppercase">Info:</h3>
                        <ul className="list-unstyled project-info">
                            <li><strong>Project Type: </strong>Personal</li>
                            <li><strong>Status: </strong> WIP</li>
                            <li><strong>Paid: </strong> N/A</li>
                            <li><strong>Format: </strong>Traditional</li>
                            <li><strong>Tools: </strong>Pencils, ink, copic markers</li>
                            <li><strong>Uploaded Online: </strong> Yes</li>
                            <li><strong>Uploaded To: </strong> Twitter, Facebook</li>
                            <li><strong>Client Paid: </strong>N/A</li>
                            <li><strong>Sent Project: </strong>No</li>
                        </ul>
                        <h3 className="display-5 text-uppercase">Piece Details:</h3>
                        <section  className="blockquote p-3 descri">
                            9 x 11 bristol page, Ocelot piece inked and colored, Christmas gift for Tony. Won't be finished and mailed to by Christmas so it'll be received late. Studies and sketches already done, need to finalize reference gathering to start on initial sketch.
                        </section>
                        <form action={`/planner/?_method=DELETE`} method="POST" className="float-right"><input class="btn btn-outline-danger" type="submit" value="Delete Project" /></form>
                </div>
            </div>

            </AppLayout> 
        )
    }
}

module.exports = Show;