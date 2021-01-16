import React from 'react'
import ListItem from '../../UI/ListItem/ListItem'
import './Project.scss'
import ProjectSection from './ProjectSection/ProjectSection'

function Project() {
    return (
        <div className='Project'>
            <h1 className='HeadingProject'>Project</h1>
            <ProjectSection projectLink='https://github.com/iamamar11/react'title='Playlist Application'>
                <ListItem> Using PERM Stack Developed a Web application to Fetching and Storing of data using RestfulAPI to enhance my knowledge.</ListItem>
                <ListItem> Performing CRUD operations, and storing songs according to the user choice of playlist type.</ListItem>
            </ProjectSection>

            <ProjectSection projectLink='https://github.com/iamamar11/MiniProjects/tree/master/react-final' title = 'Weather Application' >
                <ListItem> Worked on REST API to allow user select Country and city.</ListItem>
                <ListItem> Used Open Weather Map API to fetch result according to user choice.</ListItem>
            </ProjectSection>

            <ProjectSection projectLink='http://www.ieltsbooks.store/#/home' title='E-Book Website'>
                <ListItem> Developed a website using NodeJS and AngularJs.</ListItem>
                <ListItem> The website contains free study material for English language.</ListItem>
            </ProjectSection>
        </div>
    )
}

export default Project
