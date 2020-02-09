import React, {Component} from 'react';

class NewForm extends Component {
    render() {
        const handleSubmit = this.props.handleSubmit,
              handleChange = this.props.handleChange,
              formInputs = this.props.formInputs;
        return (
            <>
                <h1>New Site</h1>
                <form  onSubmit={handleSubmit}>
                    <div className="form-portion">
                        <label htmlFor="site_name">Site Name</label><br />
                        <input  value={formInputs.site_name} id="site_name" type="text" placeholder="Site Name" onChange={handleChange} required/>
                    </div>
                    <div className="form-portion">
                        <label htmlFor="url">URL</label><br />
                        <input  value={formInputs.url} id="url" type="text" placeholder="URL"onChange={handleChange} required/>
                    </div>
                    <div className="form-portion">
                        <label htmlFor="category">Category</label><br />
                        <input  value={formInputs.category} id="category" type="text" placeholder="Category" onChange={handleChange} required/>
                    </div>
                    <div className="form-portion">
                        <label htmlFor="img">Image</label><br />
                        <input  value={formInputs.img} id="img" type="text" placeholder="Image" onChange={handleChange} required/>
                    </div>
                    <div className="form-portion">
                        <label htmlFor="description">Description</label><br />
                        <textarea  value={formInputs.description} id="description" placeholder="Description" onChange={handleChange} required></textarea>
                    </div>
                    <div className="form-portion">
                        <input type="submit" value="New Program!" />
                    </div>
                </form>
            </>
        )
    }
}

export default NewForm