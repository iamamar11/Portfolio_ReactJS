import React from 'react'
import './Education.scss'
import EducationSection from './EducationSection/EducationSection'

function Education() {
    return (
        <div className='Education'>
            <h2 className='HeadingEducation'>Education</h2>
            <EducationSection name="L'institut Supérieur d'Informatique (ISI)" duration=' September 2019 - September 2021 ' educationLevel='Web Programming and Technologies'/>
            <EducationSection name="Lovely Professional University" duration=' September 2014 - September 2018 ' educationLevel='Bachelors of Computer Science and Engineering (Honrs)'/>
        </div>
    )
}

export default Education
