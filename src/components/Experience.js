import '../styles/Form.css'
import React, {Component} from 'react';

class Experience extends Component{
    render() {
        const handleInputChange = this.props.handleInputChange;
        return (
            <>
                <h2>Experience</h2>
                <form>
                    <div>
                        <label htmlFor="job-title">Job Title:</label>
                        <input type="text" id="job-title" name="jobTitle" onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="company">Company:</label>
                        <input type="text" id="company" name="company" onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="start-date">Start Date:</label>
                        <input type="date" id="start-date" name="startDate" onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="end-date">End Date:</label>
                        <input type="date" id="end-date" name="endDate" onChange={handleInputChange}></input>
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" onChange={handleInputChange}></textarea>
                    </div>
                </form>
            </>
        )

    }
}

export default Experience;