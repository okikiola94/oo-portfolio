import 'animate.css';
import { useState } from 'react';
// import "../../style/home.css";
import "./Experience.css";
import ThemeContext from '../../context/themeContext/themeContext';


const Experience = () => {
    const [showFrontEndSkill, setShowFrontEndSkill] = useState(false);
    const [showDataScienceSkill, setShowDataScienceSkill] = useState(false);
    const [showOperationSkill, setShowOperationSkill] = useState(false);
    return <ThemeContext.Consumer>
    {context => (<div className="work-experience" id={context.userTheme==="light"? "work_experience-light":"work_experience-dark"}>
        <div className='experience-inner'>
        <h4>Services</h4>
        </div>
        <h5>What I do</h5>
        <div className='class_container'>
            <div className="class">
                <img src={`${process.env.PUBLIC_URL}/assets/images/react-orange.png`} width='70px' height={'55px'} alt='' />
                <h6> Front-end Development</h6>
                {!showFrontEndSkill?<div>
                    <p>Transforming a UX/UI design (sketch, mockup) into reality by developing user friendly websites to Improve usability with new features and processes.</p>
                </div>
                :
                <ul className='skill-list'>     
                    <li>CSS</li> 
                    <li>Html</li>
                    <li>Reactjs</li>
                    <li>Wordpress</li>
                    <li>Javascript</li>  
                </ul>}
                <div className='show-skill-button'>
                <button onClick={()=>setShowFrontEndSkill(!showFrontEndSkill)} className='display-skills'>{!showFrontEndSkill?'View Skills':'Go Back'}</button>
                </div>

            </div>
            <div className="class">
                <img src={`${process.env.PUBLIC_URL}/assets/images/analysis-orange.png`} width='60px' height={'50px'} alt='' />
                <h6>Data Science  </h6>
                {!showDataScienceSkill?<div>
                <p>  Collecting data, analyzing and building algorithms, to solve technical problems, and creating actionable plans for companies and organizations.
                </p>
                </div>:
                <div className='skill-list'>
                    <li>Excel</li>
                    <li>XLstat</li>
                    <li>Powerbi</li>
                   
                </div>}
                <div className='show-skill-button'>
                <button onClick={()=>setShowDataScienceSkill(!showDataScienceSkill)} className='display-skills' >{!showDataScienceSkill?'View Skills':'Go Back'}</button>
                </div>
            </div>
            <div className="class" id='operations-management-class'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/operations-orange.png`} width='50px' height={'50px'} alt='' />
                <h6>Operations Management</h6>
                {!showOperationSkill?<div>
                <p>Responsible for the  effective administration of labor, quality control, and security measures to guarantee cost-effective generation and client fulfillment.</p>
                </div>:
                <div className='skill-list'>
                  
                    <li>Risk analysis</li>
                    <li>Analytical Skills</li>
                    <li>Strategic planning.</li>
                    <li>Product development</li>
                    <li>Technical proficiency</li>
                   
                </div>}
                <div className='show-skill-button'>
                <button onClick={()=>setShowOperationSkill(!showOperationSkill)} className='display-skills'>{!showOperationSkill?'View Skills':'Go Back'}</button>
                </div>
            </div>
        </div>
    </div>)}
    </ThemeContext.Consumer>
}



export default Experience;