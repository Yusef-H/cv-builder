import './styles/App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'JohnDoe@gmail.com',
      phone: '0550000999',
      experiences: [{
        jobTitle: 'Software Engineer',
        company: 'ABC Corporation',
        startDate: '2022-01-01',
        endDate: '2023-05-01',
        description: 'Worked on developing and maintaining web applications using modern technologies.'
      }]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addExperience() {
    this.setState((prevState) => ({
      experiences: [...prevState.experiences, {
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
      }]
    }));
  }

  updateExperience(experienceData) {
    this.setState((prevState) => {
      let i = prevState.experiences.length - 1;
      const updatedExperiences = [...prevState.experiences];
      updatedExperiences[i] = experienceData;
      return { experiences: updatedExperiences };
    });
  };

  deleteExperience(experience){
    this.setState((prevState) => {
      const idxToDelete = prevState.experiences.indexOf(experience);
      const newExperiences = [...prevState.experiences];
      newExperiences.splice(idxToDelete, 1);
      return { experiences: newExperiences };
    })
  }

  render() {
    return (
      <>
        <h1>CV Builder With React</h1>
        <div className="App">
          <Form
            {...this.state}
            handleInputChange={this.handleInputChange}
            addExperience={this.addExperience}
            updateExperience={this.updateExperience}
            deleteExperience={this.deleteExperience}
          />
        </div>
        <h1>Preview:</h1>
        <div className="Preview"> {/* Change to preview styles later */ }
          <Preview {...this.state}/>
        </div>
      </>
    );
  }
}

export default App;
