import React, { Component } from 'react';

import './Group4Me.css';

import group4MeWide from '../Assets/group4MeWide.png';
import processImg from '../Assets/process.png';

class Group4Me extends Component {
  render() {
    return (
      <div className='group4me-portfolio'>
        {/* Image */}
        <div className='top-block-group4me'>
          <img className='group4me-thumb-img' src={group4MeWide} />
        </div>

        {/* Title */}
        <div className='group4me-title group4me-text'>
            Group4Me
        </div>

        {/* Description */}
        <div className='group4me-desc group4me-text'>
          Group4Me aims to connect international students and local students socially with the consideration of <br/>
          cultural & language barrier.
        </div>

        {/* Project Overview */}
        <div className='flex-row group4me-text'>
          <div className='flex-column'>
              <div className='project-title'>
                Project Type
              </div>
              <div className='project-detail'>
                Business Venture, UX Research,
                UX/UI Design
              </div>
              <div className='project-title'>
                Duration
              </div>
              <div className='project-detail'>
                2 months
              </div>
          </div>
          <div className='flex-column'>
              <div className='project-title'>
                Role
              </div>
              <div className='project-detail'>
                I researched, ideated, designed, prototyped, and evaluated the business venture project.
              </div>
              <div className='project-title'>
                Skills
              </div>
              <div className='project-detail'>
                Business Analysis, User Interview, User Survey, Project Management,
                Sketching, Prototyping, Usability Test, Storytelling
              </div>
          </div>
        </div>

        {/* Project Process */}
        <div className='group4me-subtitle group4me-text'>
            Process
            <img className='group4me-process' src={processImg} />
        </div>

        {/* Research */}
        <div className='group4me-research group4me-text'>
          <div className='group4me-subtitle'>
            Research
          </div>
          <div className='project-title'>
            The problem
          </div>
          <div className='project-detail'>
            It is typical to see international students staying in their own cultural groups, 
            and it has made them struggle living abroad. We then researched on this problem
            area to seek potential solutions.
          </div>
          <div className='project-title'>
            User Interview
          </div>
          <div className='project-detail'>
            We interviewed 9 international students from 4 different countries.
          </div>
          <div className='project-title'>
            Survey
          </div>
          <div className='project-detail'>
            Our survey reached to 28 international students from 9 different countries. .
          </div>

        </div>
      </div>
    );
  }
}

export default Group4Me;