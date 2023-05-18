import '../styles/Form.css'
import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';

class Form extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      experiences,
      handleInputChange,
      addExperience,
      updateExperience
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

        <button onClick={addExperience}>Add Experience</button>

        {experiences.map((experience, key) => (
          <Experience
            key={key}
            experience={experience}
            updateExperience={updateExperience}
          />
        ))}
      </div>
    );
  }
}

export default Form;