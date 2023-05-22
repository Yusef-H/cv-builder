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
      }],
      educations: [{
        degreeType: 'Computer Science',
        university: 'ABC University',
        startDate: '2018-09-01',
        endDate: '2022-06-30',
        description: 'Studied computer science and gained knowledge in programming, algorithms, and software development.'
      }]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addToArrayProp = this.addToArrayProp.bind(this);
    this.updateArrayProp = this.updateArrayProp.bind(this);
    this.deleteArrayProp = this.deleteArrayProp.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addToArrayProp(type) {
    if(type === 'experience'){
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
    else{
      this.setState((prevState) => ({
        educations: [...prevState.educations, {
          degreeType: '',
          university: '',
          startDate: '',
          endDate: '',
          description: ''
        }]
      }));
    }
  }

  updateArrayProp(newData, type) {
    if(type === 'experience'){
      this.setState((prevState) => {
        let i = prevState.experiences.length - 1;
        const updatedExperiences = [...prevState.experiences];
        updatedExperiences[i] = newData;
        return { experiences: updatedExperiences };
      });
    }
    else{
      this.setState((prevState) => {
        let i = prevState.educations.length - 1;
        const updatedEducations = [...prevState.educations];
        updatedEducations[i] = newData;
        return { educations: updatedEducations };
      });
    }
  };

  deleteArrayProp(data, type){
    this.setState((prevState) => {
      const idxToDelete = prevState.experiences.indexOf(data);
      const newArrayProp = [...(type ==='experience' ? prevState.experiences : prevState.educations)];
      newArrayProp.splice(idxToDelete, 1);
      return { [type+ 's']: newArrayProp };
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
            addToArrayProp={this.addToArrayProp}
            updateArrayProp={this.updateArrayProp}
            deleteArrayProp={this.deleteArrayProp}
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
