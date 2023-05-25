import './styles/App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';

const App = () => {
  const [state, setState] = useState({
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
  });



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name] : value
    }));
  }
  

  const addToArrayProp = (type) => {
    if(type === 'experience'){
      setState((prevState) => ({
        ...prevState,
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
      setState((prevState) => ({
        ...prevState,
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

  const updateArrayProp = (newData, type, index) => {
    if(type === 'experience'){
      setState((prevState) => {
        const updatedExperiences = [...prevState.experiences];
        updatedExperiences[index] = newData;
        return { ...prevState, experiences: updatedExperiences };
      });
    }
    else{
      setState((prevState) => {
        const updatedEducations = [...prevState.educations];
        updatedEducations[index] = newData;
        return { ...prevState, educations: updatedEducations };
      });
    }
  };

  const deleteArrayProp = (type, index) => {
    setState((prevState) => {
      const newArrayProp = [...(type ==='experience' ? prevState.experiences : prevState.educations)];
      newArrayProp.splice(index, 1);
      return { 
        ...prevState,
        [type+ 's']: newArrayProp };
    })
  }

  return (
    <>
      <h1>CV Builder With React</h1>
      <div className="App">
        <Form
          {...state}
          handleInputChange={handleInputChange}
          addToArrayProp={addToArrayProp}
          updateArrayProp={updateArrayProp}
          deleteArrayProp={deleteArrayProp}
        />
      </div>
      <h1>Preview:</h1>
      <div className="Preview"> {/* Change to preview styles later */ }
        <Preview {...state}/>
      </div>
    </>
  );
}



export default App;
