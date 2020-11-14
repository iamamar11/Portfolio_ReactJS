import React from 'react'
import './Skills.scss'

const Skills = (props) => {
    return (
        <div className='Skills'>
            <h2 className='SkillHeading'>Skills</h2>
            <p className='SkillDescription'>programming languages and tools</p>
            <section id='SkillLogo'>    
                <i class="fab fa-3x">
                    &#xf13b;
                    &#xf38b;
                    &#xf3b9;
                    &#xf1d2;
                    &#xf836;
                    &#xf3d4;
                    &#xf419;
                    &#xf41b;
                    &#xf41e;
                    &#xf457;

                </i>
            </section>
            <p className='SkillDescription'>Workflow</p>
            <ul className='SkillList'>
                <li><i className="fas fa-check"></i> Mobile-First, Responsive Design</li>
                <li><i className="fas fa-check"></i> Cross Browser Testing & Debugging</li>
                <li><i className="fas fa-check"></i> Cross Functional Teams</li>
                <li><i className="fas fa-check"></i> Agile Development & Scrum</li>
            </ul>
        </div>
    )
}

export default Skills

