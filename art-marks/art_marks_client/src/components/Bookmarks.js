import React, {Component} from 'react';
import NewForm from "../components/NewForm.js";
import EditForm from "../components/EditForm.js";
import Entries from "../components/Entries.js";
import '../App.css';



class Bookmarks extends Component {
    state = {
        sites: [],
        formInputs: {
            site_name:"",
            url: "",
            category: "",
            description: "",
            img: ""

        },
        id: "",
        editing: false
        
    }

    componentDidMount() {
        this.prepData();
    }

    prepData = () => {
        fetch("http://localhost:3000/bookmarks")
            .then(data => data.json())
            .then(Jdata => this.setState({ sites: Jdata }))
        .catch(error => console.log(error));
    }

    handleChange = (event) => {
        const updateInput = Object.assign(
            this.state.formInputs,
            { [event.target.id]: event.target.value } );
            this.setState(updateInput);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        fetch("http://localhost:3000/bookmarks", {
                body: JSON.stringify(this.state.formInputs),
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }

        })
        .then(newMark => {
            return newMark.json()
        })
        .then(jMark => {
            this.setState({
                formInputs: {
                    site_name:"",
                    url: "",
                    category: "",
                    description: "",
                    img: ""
                },
                id: "",
                editing: false,
                sites: [jMark, ...this.state.sites]
            });
        })
        .catch(err => console.log(err));

    }

    handleEdit = (entry) => {
        const editing = this.state.editing;
        if(!editing) {
            this.setState({ 
                editing: !editing,
                id: entry.id,
                formInputs: {
                    site_name: entry.site_name,
                    url: entry.url,
                    category: entry.category,
                    description: entry.description,
                    img: entry.img
                }
            }); 
        }  else if(editing) {
            this.setState({ 
                editing: !editing,
                id: "",
                formInputs: {
                    site_name: "",
                    url: "",
                    category: "",
                    description: "",
                    img: ""
                }
            });
        }     
    }

    handleUpdate = (event) => {
        event.preventDefault();
        const id = event.target.id.value;

        fetch(`http://localhost:3000/bookmarks/${id}`, {
            body: JSON.stringify(this.state.formInputs),
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then(updatedMark => updatedMark.json())
        .then(jMark => {
                fetch("http://localhost:3000/bookmarks/")
                    .then(updatedMark => updatedMark.json())
                    .then(JupdatedMark => {
                        this.setState({
                            id: "",
                            editing: false,
                            sites: JupdatedMark,
                            formInputs: {
                                site_name:"",
                                url: "",
                                category: "",
                                description: "",
                                img: ""
                            }
                        });
                    })
        })
        .catch(err => console.log(err));
    }

    handleDestroy = (entry, index) => {
        const id = entry.id;
        fetch(`http://localhost:3000/bookmarks/${id}`, 
            {
                method: "DELETE"
            })
            .then(data => {
                this.setState({
                    sites: [
                        ...this.state.sites.slice(0, index),
                        ...this.state.sites.slice(index + 1)
                    ]
                })
            })
    }


    render() {
        return (
            <main>
                <aside className="form-area">
                   {this.state.editing ? <EditForm 
                                            handleUpdate= {this.handleUpdate} 
                                            handleChange={this.handleChange}
                                            state={this.state}
                                            />  : <NewForm 
                                            handleSubmit= {this.handleSubmit} 
                                            handleChange={this.handleChange}
                                            formInputs={this.state.formInputs}
                                            /> }
                </aside>

                <section className="content">
                    <Entries entries={this.state} handleEdit={this.handleEdit} handleDestroy={this.handleDestroy} />
                </section>
            </main>
        )
    }
}

export default Bookmarks;