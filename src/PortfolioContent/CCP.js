import React, { Component } from 'react';

import './CCP.css';

import ccpMain from '../Assets/CCP/CCP-main.jpg';
import ccpProcess from '../Assets/CCP/CCP-process-2.jpg';

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
      <div className='ccp-portfolio'>
        {/* Image */}
        <div className='top-block-ccp'>
          <img className='ccp-thumb-img' src={ccpMain} />
        </div>

        {/* Title */}
        <div className='ccp-title ccp-text'>
            Center for Community Partnerships
        </div>

        {/* Description */}
        <div className='ccp-desc ccp-text'>
          Center for Community Partnerships (CCP) is a department under the Student Life at the University of Toronto.
          CCP is responsible for connecting the non-profit organization and the University, 
          so that the University can engage in Community Learning and the organization can get student placement.
          Its website has many purposes, but it needed redesign work to be more effective, so CCP reached out to our 
          faculty for help.
        </div>

        {/* Project Overview */}
        <div className='flex-row ccp-text'>
          <div className='flex-column'>
              <div className='project-title'>
                Project Type
              </div>
              <div className='project-detail'>
                Usability Test, Website Redesign, UX/UI Design 
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
                I designed and conducted the usability test. 
                I revised and designed the new information architecture.
                I also designed the final high-fidelity mockups.
              </div>
              <div className='project-title'>
                Skills
              </div>
              <div className='project-detail'>
                Usability Test, User Interview, Card Sorting, 
                Information Architecture, Project Management, Prototyping, 
                Stakeholder Management, Constraint Management
              </div>
          </div>
        </div>

        {/* Project Process */}
        <div className='ccp-subtitle ccp-text'>
            Process
            <img className='ccp-process' src={ccpProcess} />
        </div>

        {/* Preliminary Research */}
        <div className='ccp-pre-research ccp-text'>
          <div className='ccp-subtitle'>
            Preliminary Research
          </div>
          <div className='project-title'>
            Client meeting
          </div>
          <div className='project-detail'>
            We had a kickoff meeting with our client to better understand the 
            background of the website and the organization CCP. We also got to 
            hear about the potential improvement in their mind.
          </div>
          <div className='project-title'>
            The problem
          </div>
          <div className='project-detail'>
            The website should be updated to be easier to navigate and use in terms of 
            information architecture and visual content. 
            We should also explore areas where current manual tasks can be automated using the website.
            <br/><br/>
            There are also three user segments for the website: student, faculty members, and the community partners.
            It is very important to make the website easy to navigate for all of them. We are mainly redesigning for 
            <b> faculty members and the community partners</b>.
          </div>
        </div>
          
          {/* User Research */}
        <div className='ccp-research ccp-text'>
          <div className='ccp-subtitle'>
            User Research
          </div>
          <div className='project-title'>
            Usability Test & Interview
          </div>
          <div className='project-detail'>
            We conduct usability tests and interviews to 5 faculty members and 5 community partners.
            We found that two user segments have different needs when using the website.
          </div>
          <div className='flex-row'>
            <div>
              <div className='project-title'>
                Faculty Members
              </div>
              <div className='project-detail'>
                For the faculty members, these are their complaints:<br/>
                1. They cannot find the university policies on student placement easily.<br/>
                2. They would like to access the standard forms and course design resources easily.<br/>
                3. They prefer more straightforward visual instead of block of texts.
                <br/><br/>
              </div>
            </div>
            <div>
              <div className='project-title'>
                Community Partners
              </div>
              <div className='project-detail'>
                For the community partners, these are their complaints:<br/>
                1. They cannot find the university policies on student placement easily.<br/>
                2. They would like to access the standard forms and course design resources easily.<br/>
                3. They prefer more straightforward visual instead of block of texts.
                <br/><br/>
              </div>
            </div>
          </div>
          <div className='project-title'>
            Card Sorting
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