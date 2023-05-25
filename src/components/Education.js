import '../styles/Form.css';
import React, { useState, useEffect } from 'react';

const Education = (props) => {
  
  const { degreeType, university, startDate, endDate, description } = props.education;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.updateArrayProp({ ...props.education, [name]: value }, 'education', props.index);
  };

  useEffect(() => {
    props.updateArrayProp(props.education, 'education', props.index);
  }, [props.education]);


  
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
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="university">university:</label>
          <input
            type="text"
            id="university"
            name="university"
            value={university}
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
      <button onClick={() => props.deleteArrayProp('education', props.index)}>Delete</button>
    </>
  );
  
}


export default Education;