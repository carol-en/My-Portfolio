import React, {Component} from 'react';

class Entries extends Component {
    render() {
        let entries = this.props.entries.sites;
        let handleEdit =  this.props.handleEdit;
        let handleDestroy = this.props.handleDestroy;
        return (
            <ul className="entries">
            {entries.map((site, i) => {
                return (
                    <li key={site.id}>
                        <figure>
                        <h1>{site.site_name}</h1>
                            <a href={site.url}>
                                <img src={site.img}  alt={site.site_name} />
                            </a>
                        </figure>
                        <aside className="entry">
                            <h2><span>Category: </span> {site.category}</h2>
                            <p>
                                {site.description}
                            </p>
                            <a href={site.url} title={site.url} className="visit">Visit Now!</a>
                            <div>
                                <button onClick={() => {handleEdit(site)}} className="edit-btn">
                            {!entries.editing ? "Edit" : "Cancel"}
                                </button>
                                 <button  onClick={() => {handleDestroy(site, i)}} className="delete-btn">Delete</button>
                            </div>
                        </aside>
                    </li>
                )
            })}
        </ul>
        )
    }
}



export default Entries