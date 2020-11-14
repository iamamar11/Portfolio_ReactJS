import React from 'react'
import './Education.scss'

function Education() {
    return (
        <div className='Education'>
            <h2 className='HeadingEducation'>Education</h2>
            <section className='SectionEducation'>
                <article className='articleEducation'>
                    <h3>L'institut Supérieur d'Informatique (ISI)</h3>
                    <span className='duration'> September 2019 - September 2021 </span>
                </article>
            <p className='EducationLevel'>Web Programming and Technologies</p>
            </section>

            <section className='SectionEducation'>
                <article className='articleEducation'>
                    <h3>Lovely Professional University</h3>
                    <span className='duration'> September 2014 - September 2018 </span>
                </article>
                <p className='EducationLevel'>Bachelors of Computer Science and Engineering (Honrs)</p>
            </section>
        </div>
    )
}

export default Education
