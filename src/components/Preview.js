import React, {Component} from 'react';
import '../styles/Preview.css';
class Preview extends Component{

    render() {
        const { firstName, lastName, email, phone, experiences } = this.props;
        
        return (
            <>
                <div className="header">
                    <div className="left">
                        <h1>{firstName} {lastName}</h1>
                        <p>{email}</p>
                    </div>
                    <div className="right">
                        <p>{phone}</p>
                    </div>
                </div>
                <div className="exp">
                    {experiences.map((experience, index) => (
                        <div key={index}>
                            <p>Job Title: {experience.jobTitle}</p>
                            <p>Company: {experience.company}</p>
                            <p>Start Date: {experience.startDate}</p>
                            <p>End Date: {experience.endDate}</p>
                            <p>Description: {experience.description}</p>
                        </div>
                    ))}
                </div>

            </>
        )
    }
}

export default Preview;