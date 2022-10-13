import 'animate.css';
import { useState } from 'react';
// import "../../style/home.css";
import "./qualification.css";
import ThemeContext from '../../context/themeContext/themeContext';


const Qualifications=()=>{
    const [show, setShow] = useState('education');
    return  <ThemeContext.Consumer>
    {context => (<div className='section-cover'id={context.userTheme==="light"? "section_cover-light":"section_cover-dark"}>
    <section className="qualification section">
        <div className='section-inner-container'>
    <h4 className="section__title">Experience/Qualification</h4> <span className='linn'/>
    </div>
    <h5><span className="section__subtitle">My Personal Journey</span></h5>

    <div className="qualification__container container" data-sr-id="5" style= {{visibility:'visible', opacity: '1', transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transition: 'opacity 2s cubic-bezier(0.5, 0, 0, 1) 0s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0s'}}>
        <div className="qualification__tabs">
            <div className={`qualification__button button--flex ${show==='education'&&'qualification__active'}`} onClick={()=>setShow('education')} data-target="#education"> <i class="uil uil-graduation-cap qualification__icon"></i>Education </div>

            <div className={`qualification__button button--flex ${show==='work'&&'qualification__active'}`} onClick={()=>setShow('work')} data-target="#work"> <i class="uil uil-briefcase-alt qualification__icon"></i>Work </div>
        </div>

        <div className="qualification__sections">
            {/* <!--==================== QUALIFICATION CONTENT 1====================--> */}
            <div className="qualification__content"  id="education">
                {/* <!--==================== QUALIFICATION 1====================--> */}
                
                {show==='education'&&<div className="qualification__data">
                    
                    
                    <div className='qualification__parentA'>
                        <h3 className="qualification__title">Water Resources &amp; Environmental Engineering</h3>
                        <span className="qualification__subtitle">University of Ilorin</span>
                        <div className="qualification__calendar"> <i class="uil uil-calendar-alt"></i>2014 - 2019 </div>
                    </div>
                    
                    <div className='qualification__divider'>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                        <span className="qualification__rounder"></span>                  
                    </div>

                    <div className='qualification__parentB'>
                        <h3 className="qualification__title"> Data Science &amp; Artificial Intelligence</h3>
                        <span className="qualification__subtitle">Women Techstars/Microsoft</span>
                        <div className="qualification__calendar"> <i class="uil uil-calendar-alt"></i>2021 </div>
                    </div>
                    
                    
                </div>}
                
            </div>

            {/* <!--==================== QUALIFICATION CONTENT 2====================--> */}
            <div className="qualification__content qualification__active" data-content="" id="work">
                {/* <!--==================== QUALIFICATION 1====================--> */}
                
                {show==='work'&&<div className="qualification__data">
                    
                    
                    <div className='qualification__parent1'>
                        <h3 className="qualification__title"> Operations Lead</h3>
                        <span className="qualification__subtitle">CrownCrystals Tech Limited</span>
                        <div className="qualification__calendar"> <i class="uil uil-calendar-alt"></i>2019 -date</div>
                    </div>
                    
                    <div  className='qualification__divider1'>
                        <span className="qualification__rounder"></span>
                        
                        <span className="qualification__line"></span>
                        <span className="qualification__rounder"></span>
                        
                        <span className="qualification__line"></span>
                        <span className="qualification__rounder"></span>
                        
                    </div>
                    <div className='qualification__parent2'>
                        <h3 className="qualification__title">IT support / Web developer</h3>
                        <span className="qualification__subtitle">CrownCrystals Tech Limited</span>
                        <div className="qualification__calendar"> <i class="uil uil-calendar-alt"></i>2021 -date</div>
                    </div>
                    <div className='qualification__parent3'>
                        <h3 className="qualification__title">Software Developer</h3>
                        <span className="qualification__subtitle">Freelance</span>
                        <div className="qualification__calendar"> <i class="uil uil-calendar-alt"></i>2021-date</div>
                    </div>
                </div>}
            </div>
        </div>
    </div>

</section>

</div>)}
</ThemeContext.Consumer>
}
export default Qualifications;