import '../styles/Form.css'
import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Education from './Education';

class Form extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      experiences,
      educations,
      handleInputChange,
      addToArrayProp,
      updateArrayProp,
      deleteArrayProp

    } = this.props;

    return (
      <div className="form-content">
        <h2>General Information</h2>
        <GeneralInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          handleInputChange={handleInputChange}
        />

        <button onClick={() => addToArrayProp('experience')}>Add Experience</button>
        <button onClick={addToArrayProp}>Add Education</button>
        {experiences.map((experience, key) => (
          <Experience
            key={key}
            experience = {experience}
            updateArrayProp={updateArrayProp}
            deleteArrayProp={deleteArrayProp}
          />
        ))}

        {educations.map((education, key) => (
          <Education
            key={key}
            education = {education}
            updateArrayProp={updateArrayProp}
            deleteArrayProp={deleteArrayProp}
          />
        ))}
      </div>
    );
  }
}

export default Form;