import React, {Component} from 'react';
class Preview extends Component{

    render() {
        const { firstName, lastName, email, phone, experiences } = this.props;
        return (
            <>
                <h2>Preview of CV:</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <h3>Experiences:</h3>
                {experiences.map((experience, index) => (
                    <div key={index}>
                        <p>Job Title: {experience.jobTitle}</p>
                        <p>Company: {experience.company}</p>
                        <p>Start Date: {experience.startDate}</p>
                        <p>End Date: {experience.endDate}</p>
                        <p>Description: {experience.description}</p>
                    </div>
                ))}

            </>
        )
    }
}

export default Preview;