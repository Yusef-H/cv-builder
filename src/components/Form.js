import '../styles/Form.css'
import GeneralInfo from './GeneralInfo';
import Experience from './Experience';
import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
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
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        console.log(name+"   " + value);
        this.setState({[name]: value});
    }

    addExperience() {
        this.setState((prevState) => ({
            experiences: [...prevState.experiences, {}]
        }))
    }

    render(){
        return (
            <div className="form-content">
                <h2>General Information</h2>
                <GeneralInfo {...this.state} handleInputChange = {this.handleInputChange} />

                <button onClick={this.addExperience}>Add Experience</button>
                {this.state.experiences.map((experience, key) => (
                    <Experience key={key} handleInputChange={this.handleInputChange}/>
                ))}
            </div>
        );
    }
}

export default Form;