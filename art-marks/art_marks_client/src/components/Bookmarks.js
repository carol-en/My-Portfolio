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
              formInputs = this.props.formInputs;
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
                        <label htmlFor="temp-change"></label>
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
        console.log("Entry updated!");
        console.log(event);
    }

    handleDestroy = () => {
        console.log("Entry has been deleted!");
    }


    render() {
        return (
            <main>
                <header className="form-area">
                   {this.state.editing ? <EditForm 
                                            handleUpdate= {this.handleUpdate} 
                                            handleChange={this.handleChange}
                                            formInputs={this.state.formInputs}
                                            />  : <NewForm 
                                            handleSubmit= {this.handleSubmit} 
                                            handleChange={this.handleChange}
                                            formInputs={this.state.formInputs}
                                            /> }
                </header>

                <section>
                    <ul className="entries">
                        {this.state.sites.map(site => {
                            return (
                                <li key={site.id}>
                                    <button onClick={() => {this.handleEdit(site)}} >
                                        {!this.state.editing ? "Edit" : "Cancel"}
                                    </button>
                                    <button  onClick={this.handleDestroy}>Delete</button>
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