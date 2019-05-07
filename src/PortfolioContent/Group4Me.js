import React, { Component } from 'react';

import './Group4Me.css';

import group4MeThumb from '../Assets/group4MeThumb.png';

class Group4Me extends Component {
  render() {
    return (
      <div className='group4me-portfolio'>
        {/* Image */}
        <img className='group4me-thumb-img' src={group4MeThumb} />

        {/* Title */}
        <div className='group4me-title group4me-text'>
            Group4Me
        </div>

        {/* Description */}
        <div className='group4me-desc group4me-text'>
          Group4Me aims to connect international students and local students socially
          with the consideration of cultural & language barrier.
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
        </div>
      </div>
    );
  }
}

export default Group4Me;