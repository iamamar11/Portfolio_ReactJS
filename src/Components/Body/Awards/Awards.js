import React from 'react'
import './Awards.scss'

function Awards() {
    return (
        <div className='Awards'>
            <h1 className='AwardHeading'>AWARDS & CERTIFICATIONS</h1>
            <ul className='AwardList'>
                <li><i className="fas fa-trophy"></i> ReactJs Certification - HackerRank</li>
                <li><i className="fas fa-trophy"></i> ReactJs Certification - Udemy</li>
                <li><i className="fas fa-trophy"></i> JavaScript Certification - HackerRank</li>
                <li><i className="fas fa-trophy"></i> JavaScript Certification - Udemy</li>
                <li><i className="fas fa-trophy"></i> Postman Student Expert Program - Postman</li>
            </ul>
        </div>
    )
}

export default Awards
