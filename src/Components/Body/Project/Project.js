import React from 'react'
import './Project.scss'

function Project() {
    return (
        <div className='Project'>
            <h1 className='HeadingProject'>Project</h1>

            <section className='ProjectSection'>
                <h3 className='ProjectName'><a href='https://github.com/iamamar11/MiniProjects/tree/master/react-final' title='Get Source Code' >Weather Application</a></h3>
                <ul className='ProjectList'>
                    <li className='ProjectDescription'><i class="fas fa-check"></i> Worked on REST API to allow user select Country and city.</li>
                    <li className='ProjectDescription'><i class="fas fa-check"></i> Used Open Weather Map API to fetch result according to user choice</li>
                </ul>
            </section>
            
            <section>
                <h3 className='ProjectName'><a href='http://www.ieltsbooks.store/#/home' title='Get Source Code'>E-Book Website</a></h3>
                <ul className='ProjectList'>
                    <li className='ProjectDescription'><i class="fas fa-check"></i> Developed a website using NodeJS and AngularJs.</li>
                    <li className='ProjectDescription'><i class="fas fa-check"></i> The website contains free study material for English language.</li>
                </ul>
            </section>

            <section>
                <h3 className='ProjectName'><a href='https://github.com/iamamar11/react' title='Get Source Code'>Playlist Application</a></h3>
                <ul className='ProjectList'>
                    <li className='ProjectDescription'><i class="fas fa-check"></i> Using PERM Stack Developed a Web application to Fetching and Storing of data using RestfulAPI to enhance my knowledge.</li>
                    <li className='ProjectDescription'><i class="fas fa-check"></i> Performing CRUD operations, and storing songs according to the user choice of playlist type.</li>
                </ul>
            </section>
        </div>
    )
}

export default Project
