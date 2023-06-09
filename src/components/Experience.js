import '../styles/Form.css';
import React, { useState, useEffect } from 'react';

const Experience = (props) => {
  const { jobTitle, company, startDate, endDate, description } = props.experience;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.updateArrayProp({ ...props.experience, [name]: value }, 'experience', props.index);
  };

  useEffect(() => {
    props.updateArrayProp(props.experience, 'experience', props.index);
  }, [props.experience]);

    
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
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            id="start-date"
            name="startDate"
            value={startDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            id="end-date"
            name="endDate"
            value={endDate}
            onChange={handleInputChange}
          />
        </div>
        
        
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
      <button onClick={() => props.deleteArrayProp('experience', props.index)}>Delete</button>
    </>
  );
  
}


export default Experience;