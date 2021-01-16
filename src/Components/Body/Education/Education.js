import React from 'react'
import './Education.scss'
import EducationSection from './EducationSection/EducationSection'

function Education() {
    return (
        <div className='Education'>
            <h2 className='HeadingEducation'>Education</h2>
            <EducationSection name="Web Programming and Technologies" duration=' September 2019 - September 2021 ' educationLevel="L'institut Supérieur d'Informatique (ISI)"/>
            <EducationSection name="Bachelors of Computer Science and Engineering (Honrs)" duration=' September 2014 - September 2018 ' educationLevel='Lovely Professional University'/>
        </div>
    )
}

export default Education
