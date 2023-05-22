import React, {Component} from 'react';
import '../styles/Preview.css';
class Preview extends Component{

    render() {
        const { firstName, lastName, email, phone, experiences } = this.props;
        
        return (
            <div>
                <div className="header">
                    <div className="left">
                        <h1>{firstName} {lastName}</h1>
                        <p>{email}</p>
                    </div>
                    <div className="right">
                        <p>{phone}</p>
                    </div>
                </div>
                <hr />
                <div className="experiences-section">
                    {experiences.length > 0 && <h2 className="exp-title">Experiences</h2>}
                    {experiences.map((experience, index) => (
                        <div key={index} className="exp-container">
                            <div className="job-title-info">
                                <div className="titles">
                                    <p>{experience.jobTitle} </p>
                                    <p>At</p>
                                    <p>{experience.company}</p>
                                </div>
                                <div className="dates">
                                    <p>From: </p>
                                    <p>{experience.startDate}</p>
                                    <p>Until: </p>
                                    <p>{experience.endDate}</p>
                                </div>
                            </div>
                            <p className="desc">{experience.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default Preview;