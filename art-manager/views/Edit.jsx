const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class Edit extends React.Component {
    render() {
        return (
            <AppLayout title={`Update ${this.props.project.title}`}> 
            <div className="container pages-wrapper w-75">
                                <a href="/planner" className="btn btn-link">Return to Index</a>
                    <form action={`/planner/${this.props.project._id}?_method=PUT`} method="POST">

                    <div className="form-row">
                    <div className="col-4 mb-3">
                            <label for="title">
                                Project Title:    
                            </label>
                                <input className="form-control" id="title" type="text" name="title" value={this.props.project.title} required/>
                            
                        </div>

                        <div className="col mb-3">
                            <label for="project-type">
                                Project Type:
                            </label>
                                <select id="project-type" className="form-control" name="type" required>
                                    <option value={this.props.project.type} selected disabled hidden>{this.props.project.type}</option>
                                    <option value="Commission">Commission</option>
                                    <option value="Commercial/Paid">Commercial / Paid</option>
                                    <option value="Personal">Personal</option>
                                </select>
                        </div>
                        <div className="col mb-3">
                            <label for="started">
                                Started On:    
                            </label>
                                <input className="form-control" id="started" type="text" name="started" value={this.props.project.started} required/>
                            
                        </div>
                        <div className="col mb-3">
                            <label for="stage">
                                Stage:
                            </label>
                                <input id="stage" className="form-control" type="text" name="stage" value={this.props.project.stage} required/>
                        </div>
                    </div>

                    <div className="form-row mb-3">
                        <div className="col-3">
                            <label for="format">
                                Format:
                            </label>
                            <input type="text" className="form-control" id="format" name="format" value={this.props.project.format} />
                        </div>
                        <div className="col-3">
                            <label for="tools">
                                Tools:
                            </label>
                            <input type="text" className="form-control" id="tools" name="tools" value={this.props.project.tools} />
                        </div>
                        <div className="col">
                            <label for="client">
                                Client:
                            </label>
                                <input id="client" className="form-control" type="text" name="client" value={this.props.project.client} />
                        </div>
                        <div className="col mb-3">
                            <label for="client-email">
                                Client email:
                            </label>
                                <input id="client-email" className="form-control" type="text" name="clientEmail" value={this.props.project.clientEmail}/>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col mb-3">
                            <label for="project-price">
                                Project Price:
                            </label>
                                <input id="project-price" className="form-control" type="text" name="cost" value={this.props.project.cost}/>
                        </div>
                        <div className="col mb-3">
                            <label for="payment-plan">
                                Payment Plan:
                            </label>
                                <input id="payment-plan" className="form-control" type="text" name="paymentPlan" value={this.props.project.paymentPlan} />
                        </div>
                        <div className="col mb-3">
                            <label for="pay-type">
                                Pay Type:
                            </label>
                                <input id="pay-type" className="form-control" type="text" name="payType" value={this.props.project.payType}/>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col">
                            <label for="deadline">
                                Deadline:
                            </label>
                                <input id="deadline" className="form-control" type="text" name="deadline" value={this.props.project.deadline}/>
                        </div>
                        <div className="col mb-3">
                            <label for="uploaded">
                                Uploaded Online:
                            </label>
                                <select id="uploaded" className="form-control" name="uploaded" required>
                                    <option value={this.props.project.uploaded} selected disabled hidden>{this.props.project.uploaded}</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                        </div>
                        <div className="col mb-3">
                            <label for="uploaded-to">
                                Uploaded To:
                            </label>
                                <input id="uploaded-to" className="form-control" type="text" name="uploadedTo" value={this.props.project.uploadedTo} />
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <label for="details">
                            Prject Details:
                        </label>
                        <textarea id="details" className="form-control" name="details" value={this.props.project.details}></textarea>
                    </div>
                    <div className="form-group">
                            <input className="btn btn-primary" type="submit" value="Update Project"/>
                            <a className="btn btn-info ml-3" href={`/planner/${this.props.project._id}`}>Cancel</a>
                    </div>
        
                    </form> 
            </div>
            </AppLayout> 
        )
    }
}

module.exports = Edit;