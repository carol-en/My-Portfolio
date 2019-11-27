const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class New extends React.Component {
    render() {
        return (
            <AppLayout title="Add A New Project"> 

                <div className="container pages-wrapper w-75">
                    <a href="/planner" className="btn btn-link">Return to Index</a>
                    <form action="/planner" method="POST">

                    <div className="form-row">
                    <div className="col-4 mb-3">
                            <label for="title">
                                Project Title:    
                            </label>
                                <input className="form-control" id="title" type="text" name="title" placeholder="Project Title" required/>
                            
                        </div>
                        <div className="col mb-3">
                            <label for="project-type">
                                Project Type:
                            </label>
                                <select id="project-type" className="form-control" name="type" required>
                                <option value="" selected disabled hidden>Choose Type</option>
                                    <option value="Commission">Commission</option>
                                    <option value="Commercial/Paid">Commercial / Paid</option>
                                    <option value="Personal">Personal</option>
                                </select>
                        </div>
                        <div className="col mb-3">
                            <label for="started">
                                Started On:    
                            </label>
                                <input className="form-control" id="started" type="text" name="started" placeholder="ex: Nov 3rd, 2019" required/>
                            
                        </div>
                        <div className="col mb-3">
                            <label for="stage">
                                Stage:
                            </label>
                                <input id="stage" className="form-control" type="text" name="stage" placeholder="Project Stage" required/>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col-3">
                            <label for="format">
                                Format:
                            </label>
                            <input type="text" className="form-control" id="format" name="format" placeholder="Digitial? Traditional? Mixed media?" />
                        </div>
                        <div className="col-3">
                            <label for="tools">
                                Tools:
                            </label>
                            <input type="text" className="form-control" id="tools" name="tools" placeholder="Ink? Photoshop? Etc..." />
                        </div>
                        <div className="col">
                            <label for="client">
                                Client:
                            </label>
                                <input id="client" className="form-control" type="text" name="client" placeholder="Name of client" />
                        </div>
                        <div className="col mb-3">
                            <label for="client-email">
                                Client email:
                            </label>
                                <input id="client-email" className="form-control" type="text" name="clientEmail" placeholder="@"/>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div className="col mb-3">
                            <label for="project-price">
                                Project Price:
                            </label>
                                <input id="project-price" className="form-control" type="text" name="cost" placeholder="Project Price"/>
                        </div>
                        <div className="col mb-3">
                            <label for="payment-plan">
                                Payment Plan:
                            </label>
                                <input id="payment-plan" className="form-control" type="text" name="paymentPlan" placeholder="Project paid in full or parts" />
                        </div>
                        <div className="col mb-3">
                            <label for="pay-type">
                                Pay Type:
                            </label>
                                <input id="pay-type" className="form-control" type="text" name="payType" placeholder="Paid with Paypal? Router? Venmo?"/>
                        </div>
                    </div>
                    <div className="form-row mb-3">
                        <div class="col">
                            <label for="deadline">
                                Deadline:
                            </label>
                                <input id="deadline" className="form-control" type="text" name="deadline" placeholder="Due date"/>
                        </div>
                        <div className="col mb-3">
                            <label for="uploaded">
                                Uploaded Online:
                            </label>
                                <select id="uploaded" className="form-control" name="uploaded" required>
                                <option value="" selected disabled hidden>Please Choose</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                        </div>
                        <div className="col mb-3">
                            <label for="uploaded-to">
                                Uploaded To:
                            </label>
                                <input id="uploaded-to" className="form-control" type="text" name="uploadedTo" placeholder="Uploaded to where?" />
                        </div>
                    </div>
    
                    <div className="form-group mb-3">
                        <label for="details">
                            Project Details:
                        </label>
                        <textarea id="details" className="form-control" name="details" placeholder="Describe the project's details"></textarea>
                    </div>
                    <div className="form-group">
                            <input className="btn btn-primary" type="submit" value="Add New Project"/>
                    </div>
        
                    </form>    
                </div>
                
            </AppLayout> 
        )
    }
}

module.exports = New;