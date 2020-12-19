import React from 'react'
import './EducationSection.scss';

const EducationSection = (props) => {
    return (
        <section className='SectionEducation'>
        <article className='articleEducation'>
            <h3>{props.name}</h3>
            <span className='duration'>{props.duration}</span>
        </article>
        <p className='EducationLevel'>{props.educationLevel}</p>
        </section>
    )
}

export default EducationSection
