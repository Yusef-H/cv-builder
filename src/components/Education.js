import '../styles/Form.css';
import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
    const { degreeType, university, startDate, endDate, description } = this.props.education;
    this.state = {
      degreeType: degreeType,
      university: university,
      startDate: startDate,
      endDate: endDate,
      description: description
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
        this.props.updateArrayProp(this.state, 'education');
    });
  };

  render() {
    const { degreeType, university, startDate, endDate, description } = this.props.education;
    return (
      <>
        <h2>Education</h2>
        <form>
          <div>
            <label htmlFor="job-title">Job Title:</label>
            <input
              type="text"
              id="job-title"
              name="degreeType"
              value={degreeType}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="university">university:</label>
            <input
              type="text"
              id="university"
              name="university"
              value={university}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="date"
              id="start-date"
              name="startDate"
              value={startDate}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="end-date">End Date:</label>
            <input
              type="date"
              id="end-date"
              name="endDate"
              value={endDate}
              onChange={this.handleInputChange}
            />
          </div>
          
          
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
        </form>
        <button onClick={() => this.props.deleteArrayProp(this, 'education')}>Delete</button>
      </>
    );
    
  }
}

export default Education;