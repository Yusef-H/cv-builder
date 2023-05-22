import '../styles/Form.css';
import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    const { jobTitle, company, startDate, endDate, description } = this.props.experience;
    this.state = {
      jobTitle: jobTitle,
      company: company,
      startDate: startDate,
      endDate: endDate,
      description: description
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
        this.props.updateExperience(this.state);
    });
  };

  render() {
    const { jobTitle, company, startDate, endDate, description } = this.props.experience;
    return (
      <>
        <h2>Experience</h2>
        <form>
          <div>
            <label htmlFor="job-title">Job Title:</label>
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              value={jobTitle}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
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
        <button onClick={() => this.props.deleteExperience(this)}>Delete</button>
      </>
    );
    
  }
}

export default Experience;