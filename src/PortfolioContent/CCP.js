import React, { Component } from 'react';

import './CCP.css';

import group4MeWide from '../Assets/group4Me/group4MeWide.png';
import processImg from '../Assets/group4Me/process.png';
import group4MeInterview from '../Assets/group4Me/group4MeInterview.jpg';
import group4MeSurvey from '../Assets/group4Me/group4MeSurvey.png';
import group4MeTeach from '../Assets/group4Me/group4MeTeach.png';
import group4MeSocial from '../Assets/group4Me/group4MeSocial.png';
import group4MeHelp from '../Assets/group4Me/group4MeHelp.png';
import group4MePersona from '../Assets/group4Me/group4MePersona.jpg';
import group4MeEmpathy from '../Assets/group4Me/group4MeEmpathy.png';
import group4MeIdeas from '../Assets/group4Me/group4MeIdeas.jpg';
import group4MePriority from '../Assets/group4Me/group4MePriority.png';
import group4MeChat from '../Assets/group4Me/group4MeChat.png';
import group4MeActivity from '../Assets/group4Me/group4MeActivity.png';
import group4MeSecure from '../Assets/group4Me/group4MeSecure.png';
import group4MeMatch from '../Assets/group4Me/group4MeMatch.png';
import group4MeInterest from '../Assets/group4Me/group4MeInterest.png';
import group4MeGif1 from '../Assets/group4Me/group4Me1.gif';
import group4MeGif2 from '../Assets/group4Me/group4Me2.gif';
import group4MeGif3 from '../Assets/group4Me/group4Me3.gif';

class CCP extends Component {
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
          {/* Interview & Survey */}
          <div className='flex-row'>
            <div>
              <div className='project-title'>
                User Interview
              </div>
              <div className='project-detail'>
                We interviewed 9 international students from 4 different countries.
              </div>
              <img className='group4me-interview' src={group4MeInterview}/>
            </div>
              <div>
              <div className='project-title'>
                Survey
              </div>
              <div className='project-detail'>
                Our survey reached to 28 international students from 9 different countries.
              </div>
              <img className='group4me-survey' src={group4MeSurvey}/>
            </div>
          </div>
          {/* Key Findings */}
          <div className='project-title'>
            Key difficulties
          </div>
          <div className='flex-row'> 
            <img className='group4me-finding' src={group4MeTeach}/>
            <img className='group4me-finding' src={group4MeSocial}/>
            <img className='group4me-finding' src={group4MeHelp}/>
          </div>
          {/* Persona */}
          <div className='project-title'>
            Meet our persona, Tommy!
          </div>
          <div className='flex-row'>
            <div>
              <img className='group4me-persona' src={group4MeEmpathy}/>
              <div className='project-detail group4me-center'>
                Empathy Map
              </div>
            </div>
            <div>
              <img className='group4me-persona' src={group4MePersona}/>
              <div className='project-detail group4me-center'>
                Persona
              </div>
            </div>
          </div>
        </div>

        {/* Ideate */}
        <div className='group4me-ideate group4me-text'>
          <div className='group4me-subtitle'>
            Ideate
          </div>

          <div className='project-detail'>
            After we gathered user insights, we moved ahead and 
            ideate on how might we solve those pain points for the international students.
            We then vote and prioritize the ideas based on impact and feasibility shown on the right.
            I threw in some machine learning related solutions, but they have privacy and feasibility issues with them.
          </div>
          <div className='flex-row'>
            <div>
              <img className='group4me-persona' src={group4MeIdeas}/>
              <div className='project-detail group4me-center'>
                Big Ideas
              </div>
            </div>
            <div>
              <img className='group4me-persona' src={group4MePriority}/>
              <div className='project-detail group4me-center'>
                Prioritization
              </div>
            </div>
          </div>
          <div className='project-detail'>
            As you can see on the prioritization grid, the idea of social platform really stood out 
            because it will be able to solve the pain points of our users and it is rather easy to impplement.
          </div>
        </div>

        {/* Design */}
        <div className='group4me-ideate group4me-text'>
          <div className='group4me-subtitle'>
            Design
          </div>

          <div className='project-detail'>
            After deciding on the idea, we continued to further explore what key functions we will need to 
            address the key pain points. <br/>
            Here are the final key functionalities: <br/><br/>
          </div>
          {/* Low-fi */}
          <div>
            <div className='flex-row group4me-lofi-group'>
              <div className='project-detail'>
                1. Small group <b>matching</b> with both international and local students who have similar interests.
              </div>
              <img className='group4me-lofi' src={group4MeInterest} />
              <img className='group4me-lofi' src={group4MeMatch} />
            </div>

            <div className='flex-row group4me-lofi-group'>
              <div className='project-detail'>
                2. Users identity verification for high level of <b>security</b> and trust.
              </div>
              <img className='group4me-lofi' src={group4MeSecure} />
            </div>

            <div className='flex-row group4me-lofi-group'>
              <div className='project-detail'>
                3. Guided conversations and activity <b>prompts</b> for the group offline meetup.
              </div>
              <img className='group4me-lofi' src={group4MeChat} />
              <img className='group4me-lofi' src={group4MeActivity} />
            </div>
          </div>
          
        </div>

        {/* Prototype */}
        <div className='group4me-prototype group4me-text'>
          <div className='group4me-subtitle'>
            High Fidelity Prototype
          </div>
          <div className='group4me-highfi-group'>
            <div className='flex-row group4me-highfi'>
              <img className='group4me-gif' src={group4MeGif1} />
              <div className='group4me-hifi-text'>
                Set up your profile!
              </div>
            </div>
            <div className='flex-row group4me-highfi'>
              <img className='group4me-gif' src={group4MeGif2} />
              <div className='group4me-hifi-text'>
                Find local students who have similar interests!
              </div>
            </div>
            <div className='flex-row group4me-highfi'>
              <img className='group4me-gif' src={group4MeGif3} />
              <div className='group4me-hifi-text'>
                Don't worry if you need help chatting!
              </div>
            </div>
          </div>
        </div>

      {/* Takeaway */}
        <div className='group4me-prototype group4me-text'>
          <div className='group4me-subtitle'>
            Key Takeaway
          </div>
          <div className='project-detail'>
            1. <b>Do not jump to solution too soon</b>. 
            It is important to understand the problem area first, and then
            come up with ideas to solve the problem. Otherwise, your solution
            might be solving the wrong problem.<br/> <br/>
            2. <b>Crafting and telling a good story about your solution is powerful. </b>
            A good story will help other understand and follow your thought process. 
            Moreover, it will actually make your solution better as you try to craft the story.
          </div>
        </div>

      </div>
    );
  }
}

export default CCP;