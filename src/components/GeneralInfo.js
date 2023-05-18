import '../styles/Form.css'
import React, {Component} from 'react';

class GeneralInfo extends Component{
    render() {
        const { firstName, lastName, email, phone, handleInputChange } = this.props;

        return(
            <form>
                <div>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="first-name" name="firstName"  onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="last-name" name="lastName" onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name = "email" onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name ="phone" onChange={handleInputChange}></input>
                </div>
            </form>
        )
    }
}

export default GeneralInfo;