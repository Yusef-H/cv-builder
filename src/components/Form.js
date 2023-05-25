import '../styles/Form.css'
import React from 'react';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import Education from './Education';

const Form = (
  {
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
  }
) => {

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
          index={key}
          experience = {experience}
          updateArrayProp={updateArrayProp}
          deleteArrayProp={deleteArrayProp}
        />
      ))}

      {educations.map((education, key) => (
        <Education
          key={key}
          index={key}
          education = {education}
          updateArrayProp={updateArrayProp}
          deleteArrayProp={deleteArrayProp}
        />
      ))}
    </div>
  );
}


export default Form;