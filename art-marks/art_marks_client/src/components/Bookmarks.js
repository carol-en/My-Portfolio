import React, {Component} from 'react';
import '../App.css';


class Bookmarks extends Component {
    state = {
        sites: []
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

    handleChange = () => {
        console.log("Change has been handled");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("New Entry has been sent!");
    }

    handleEdit = () => {
        console.log("Update active!");
    }

    handUpdate = () => {
        console.log("Entry updated!");
    }

    handleDestroy = () => {
        console.log("Entry has been deleted!");
    }


    render() {
        const sites = this.state.sites;

        return (
            <main>
                <header className="form-area">
                    <h1>New Site</h1>
                    <form  onSubmit={this.handleSubmit}>
                        <div className="temp-form-name">
                            <label htmlFor="temp-change"></label>
                            <input type="text" placeholder="Site Name" onChange={this.handleChange}/>
                        </div>
                        <div className="temp-form-name">
                            <label htmlFor="temp-change"></label>
                            <input type="text" placeholder="URL"onChange={this.handleChange} />
                        </div>
                        <div className="temp-form-name">
                            <label htmlFor="temp-change"></label>
                            <input type="text" placeholder="Category" onChange={this.handleChange}/>
                        </div>
                        <div className="temp-form-name">
                            <label htmlFor="temp-change"></label>
                            <input type="text" placeholder="Image" onChange={this.handleChange}/>
                        </div>
                        <div className="temp-form-name">
                            <label htmlFor="temp-change"></label>
                            <textarea placeholder="Description" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="temp-form-name">
                            <label htmlFor="temp-change"></label>
                            <input type="submit" value="New Program!" />
                        </div>
                    </form>
                </header>

                <section>
                    <ul className="entries">
                        {sites.map(site => {
                            return (
                                <li key={site.id}>
                                    <button onClick={this.handleEdit} >Edit</button>
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