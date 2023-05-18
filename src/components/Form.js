import '../styles/Form.css'
import GeneralInfo from './GeneralInfo';
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
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        console.log(name+"   " + value);
        this.setState({[name]: value});
    }

    render(){
        return (
            <div>
                <h2>General Information</h2>
                <GeneralInfo {...this.state} handleInputChange = {this.handleInputChange} />


            </div>
        );
    }
}

export default Form;