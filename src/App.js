import './styles/App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experiences: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
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

  updateExperience(index, experienceData) {
    this.setState((prevState) => {
      const updatedExperiences = [...prevState.experiences];
      updatedExperiences[index] = experienceData;
      return { experiences: updatedExperiences };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>CV Builder With React</h1>
        <Form
          {...this.state}
          handleInputChange={this.handleInputChange}
          addExperience={this.addExperience}
          updateExperience={this.updateExperience}
        />
        <Preview {...this.state} />
      </div>
    );
  }
}

export default App;
