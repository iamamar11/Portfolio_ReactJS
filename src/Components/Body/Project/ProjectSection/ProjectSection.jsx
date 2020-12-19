import React from 'react'
import './ProjectSection.scss'

const ProjectSection = (props) => {
    return (
            <section className='ProjectSection'>
                <h3 className='ProjectName'><a href={props.projectLink} target="_blank" rel="noopener noreferrer" title='Get Source Code' >{props.title}</a></h3>
                <ul className='ProjectList'>
                    {props.children}
                </ul>
            </section>
    )
}

export default ProjectSection
