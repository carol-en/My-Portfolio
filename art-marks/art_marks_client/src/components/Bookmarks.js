import React, {Component} from 'react';
import '../App.css';

class NewForm extends Component {
    render() {
        const handleSubmit = this.props.handleSubmit,
              handleChange = this.props.handleChange,
              formInputs = this.props.formInputs;
        return (
            <>
                <h1>New Site</h1>
                <form  onSubmit={handleSubmit}>
                    <div className="temp-form-name">
                        <label htmlFor="site_name">Site Name</label>
                        <input  value={formInputs.site_name} id="site_name" type="text" placeholder="Site Name" onChange={handleChange}/>
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="url">URL</label>
                        <input  value={formInputs.url} id="url" type="text" placeholder="URL"onChange={handleChange} />
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="category">Category</label>
                        <input  value={formInputs.category} id="category" type="text" placeholder="Category" onChange={handleChange}/>
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="img">Image</label>
                        <input  value={formInputs.img} id="img" type="text" placeholder="Image" onChange={handleChange}/>
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="description">Description</label>
                        <textarea  value={formInputs.description} id="description" placeholder="Description" onChange={handleChange}></textarea>
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="temp-change"></label>
                        <input type="submit" value="New Program!" />
                    </div>
                </form>
            </>
        )
    }
}

class EditForm extends Component {
    render() {
        const handleUpdate = this.props.handleUpdate,
              handleChange = this.props.handleChange,
              formInputs = this.props.state.formInputs,
              entryID = this.props.state.id
        return (
            <>
                <h1>Edit Site</h1>
                <form  onSubmit={handleUpdate}>
                    <div className="temp-form-name">
                        <label htmlFor="site_name">Site Name</label>
                        <input  value={formInputs.site_name} id="site_name" type="text" placeholder="Site Name" onChange={handleChange}/>
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="url">URL</label>
                        <input  value={formInputs.url} id="url" type="text" placeholder="URL"onChange={handleChange} />
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="category">Category</label>
                        <input  value={formInputs.category} id="category" type="text" placeholder="Category" onChange={handleChange}/>
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="img">Image</label>
                        <input  value={formInputs.img} id="img" type="text" placeholder="Image" onChange={handleChange}/>
                    </div>
                    <div className="temp-form-name">
                        <label htmlFor="description">Description</label>
                        <textarea  value={formInputs.description} id="description" placeholder="Description" onChange={handleChange}></textarea>
                    </div>
                    <div className="temp-form-name">
                        <input  value={entryID} id="id" type="hidden" name="id" />
                        <input type="submit" value="Update Program!" />
                    </div>
                </form>
            </>
        )
    }
}


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
        fetch("http://localhost:3000/bookmarks/" + index, 
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
                <header className="form-area">
                   {this.state.editing ? <EditForm 
                                            handleUpdate= {this.handleUpdate} 
                                            handleChange={this.handleChange}
                                            state={this.state}
                                            />  : <NewForm 
                                            handleSubmit= {this.handleSubmit} 
                                            handleChange={this.handleChange}
                                            formInputs={this.state.formInputs}
                                            /> }
                </header>

                <section>
                    <ul className="entries">
                        {this.state.sites.map((site, i) => {
                            return (
                                <li key={site.id}>
                                    <button onClick={() => {this.handleEdit(site)}} >
                                        {!this.state.editing ? "Edit" : "Cancel"}
                                    </button>
                                    <button  onClick={() => {this.handleDestroy(site, i)}}>Delete</button>
                                    <h1>{site.site_name}</h1>
                                    <figure>
                                        <a href={site.url}>
                                            <img src={site.img}  alt={site.site_name} />
                                        </a>
                                    </figure>
                                    <h2><span>Category: </span> {site.category}</h2>
                                    <aside>
                                        {site.description}
                                        <a href={site.url} title={site.url}>Visit Now!</a>
                                    </aside>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </main>
        )
    }
}

export default Bookmarks;