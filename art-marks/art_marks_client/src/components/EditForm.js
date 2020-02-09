import React, {Component} from 'react';

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
                    <div className="form-portion">
                        <label htmlFor="site_name">Site Name</label><br />
                        <input  value={formInputs.site_name} id="site_name" type="text" placeholder="Site Name" onChange={handleChange} requried />
                    </div>
                    <div className="form-portion">
                        <label htmlFor="url">URL</label><br />
                        <input  value={formInputs.url} id="url" type="text" placeholder="URL"onChange={handleChange} requried />
                    </div>
                    <div className="form-portion">
                        <label htmlFor="category">Category</label><br />
                        <input  value={formInputs.category} id="category" type="text" placeholder="Category" onChange={handleChange} required />
                    </div>
                    <div className="form-portion">
                        <label htmlFor="img">Image</label><br />
                        <input  value={formInputs.img} id="img" type="text" placeholder="Image" onChange={handleChange} required />
                    </div>
                    <div className="form-portion">
                        <label htmlFor="description">Description</label><br />
                        <textarea  value={formInputs.description} id="description" placeholder="Description" onChange={handleChange} required ></textarea>
                    </div>
                    <div className="form-portion">
                        <input  value={entryID} id="id" type="hidden" name="id" />
                        <input type="submit" value="Update Program!" />
                    </div>
                </form>
            </>
        )
    }
}

export default EditForm 