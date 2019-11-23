const React = require("react");
const AppLayout = require('./layout/AppLayout.jsx');


class New extends React.Component {
    render() {
        return (
            <AppLayout title="Add A New Project"> 
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Project Name" required/>
                    </label>
                    <label>
                        Project Type:
                        <input type="text" name="type" placeholder="Project Type" required/>
                    </label>
                    <label>
                        Stage:
                        <input type="text" name="type" placeholder="Project Stage" required/>
                    </label>
                    <label>
                        Status:
                        <input type="text" name="stats" placeholder="Project Status" required/>
                    </label>
                    <label>
                        Uploaded Online:
                        <input type="text"name="uploaded" placeholder="Yes or No" required/>
                    </label>
                    <label>
                        Uploaded To:
                        <input type="text" name="uploadedTo" placeholder="Uploaded to where?" />
                    </label>
                    <label>
                        Client:
                        <input type="text" name="client" placeholder="Is there a client" />
                    </label>
                    <label>
                        Client email:
                        <input type="text" name="clientEmail" placeholder="Client's email"/>
                    </label>
                    <label>
                        Project Price:
                        <input type="text" name="cost" placeholder="Project's price"/>
                    </label>
                    <label>
                        Payment Plan:
                        <input type="text" name="paymentPlan" placeholder="Payment Plan, pay in 1 go or in sections...etc"/>
                    </label>
                    <label>
                        Pay Type:
                        <input type="text" name="payType" placeholder="PayPal, Checks, Venmo..etc"/>
                    </label>
                    <label>
                        Deadline:
                        <input type="text" name="deadline" placeholder="Due date"/>
                    </label>
                    <textarea name="details" placeholder="Describe the project's details"></textarea>
                    <label>
                        <input type="submit" value="Add new Project"/>
                    </label>
                </form>    
            </AppLayout> 
        )
    }
}

module.exports = New;