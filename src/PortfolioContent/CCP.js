import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './CCP.css';

import ccpMain from '../Assets/CCP/CCP-main.jpg';
import ccpProcess from '../Assets/CCP/CCP-process-2.jpg';
import ccpPCA from '../Assets/CCP/CCP-PCA.png';
import ccpMatrix from '../Assets/CCP/CCP-matrix.png';
import ccpIABefore from '../Assets/CCP/CCP-IA-before.png';
import ccpIAAfter from '../Assets/CCP/CCP-IA-after.png';
import ccpLabel1 from '../Assets/CCP/CCP-label-change.png';
import ccpLabel2 from '../Assets/CCP/CCP-label-change2.png';
import ccpLabel3 from '../Assets/CCP/CCP-label-change3.png';
import ccpSketch1 from '../Assets/CCP/CCP-sketch1.png';
import ccpSketch2 from '../Assets/CCP/CCP-sketch2.png';
import ccpSketch3 from '../Assets/CCP/CCP-sketch3.png';
import ccpProto1 from '../Assets/CCP/CCP-proto1.png';
import ccpProto2 from '../Assets/CCP/CCP-proto2.png';
import ccpProto3 from '../Assets/CCP/CCP-proto3.png';
import ccpProto4 from '../Assets/CCP/CCP-proto4.png';

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
        <div className='ccp-project-overview ccp-text'>
          <Row between='xs'>
            <Col xs={4}>
              <div className='project-title'>
                Project Type
              </div>
              <div className='project-detail'>
                Usability Test, Website Redesign, UX/UI Design 
              </div>
            </Col>
            <Col xs>
              <div className='project-title'>
                Role
              </div>
              <div className='project-detail'>
                I designed and conducted the usability test. 
                I revised and designed the new information architecture.
                I also designed the final high-fidelity mockups.
              </div>
            </Col>
          </Row>
          <Row between='xs'>
            <Col xs={4}>
              <div className='project-title'>
                Duration
              </div>
              <div className='project-detail'>
                2 months
              </div>
            </Col>
            <Col xs>
              <div className='project-title'>
                Skills
              </div>
              <div className='project-detail'>
                Usability Test, User Interview, Card Sorting, 
                Information Architecture, Project Management, Prototyping, 
                Stakeholder Management, Constraint Management
              </div>
            </Col>
          </Row>
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
            <b> faculty members</b> and the <b>community partners</b>.
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
          <Row between='xs'>
            <Col xs>
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
            </Col>
            <Col xs>
              <div className='project-title'>
                Community Partners
              </div>
              <div className='project-detail'>
                For the community partners, these are their complaints:<br/>
                1. Some words are confusing for them without explanation.<br/>
                2. They would like to find out more about what is CCP and what CCP does.<br/>
                3. They try to find out how to work with CCP quickly, but it is not obvious.
                <br/><br/>
              </div>
            </Col>
          </Row>

          <div className='project-detail'>
            Here are some quote from the interviewees:
          </div>
          <div className='project-quote'>
            "In the 10 years I worked with CCP, I only used the website a few times."
          </div>
          <div className='project-quote'>
            "I have only used it once, and I have not used it for years since then."
          </div>

          {/* Card Sorting */}
          <div className='project-title'>
            Card Sorting
          </div>
          <div className='project-detail'>
            To improve the current navigation system and labelling system, 
            we crafted and deployed a card sorting test to the interviewees. 
            The cards include current navigation menu items with 
            tweaked wording and new menu items suggested by our research.
            The results are also split by the two audience as their perspective are very different. <br/>
            <br/>
            Here are two screenshots of the card sorting results analysis:
          </div>
          <Row between='xs'>
            <Col xs className='ccp-caption'>
              <img className='ccp-persona' src={ccpPCA}/>
              <div className='project-detail'>
                Participant-centric Analysis
              </div>
            </Col>
            <Col xs className='ccp-caption'>
              <img className='ccp-persona' src={ccpMatrix}/>
              <div className='project-detail'>
                Similarity Matrix
              </div>
            </Col>
          </Row>
        </div>

        

        {/* IA */}
        <div className='ccp-ideate ccp-text'>
          <div className='ccp-subtitle'>
            Information Architecture (IA)
          </div>

          <div className='project-detail'>
            One focus of this project is to build a better information architecture for the website.
            Because of the nature of the website, keeping audience-specific scheme was important and necessary.
            However, we modified the sub-menu according to our research. 
            <br/><br/>
            Here are the label changes:
          </div>

          <div>
              <img className='ccp-label-change' src={ccpLabel1}/>
              <img className='ccp-label-change' src={ccpLabel2}/>
              <img className='ccp-label-change' src={ccpLabel3}/>
          </div>

          <div className='project-detail'>
            Here is a comparison of the information architecture (IA) schematic diagrams:
          </div>

          <Row between='xs'>
            <Col xs className='ccp-caption'>
              <img className='ccp-IA' src={ccpIABefore}/>
              <div className='project-detail'>
                IA Schematic diagram (Before)
              </div>
            </Col>
            <Col xs className='ccp-caption'>
              <img className='ccp-IA' src={ccpIAAfter}/>
              <div className='project-detail'>
                IA Schematic diagram (After)
              </div>
            </Col>
          </Row>
        </div>
          

        {/* Sketch */}
        <div className='ccp-sketch-section ccp-text'>
          <div className='ccp-subtitle'>
            Sketches
          </div>
          <div className='project-detail'>
            Beside our IA changes, we also proposed a side menu and other visual changes to the website.
            We started with sketching on iPad, and below are some examples of the sketch showing our proposed layout.
          </div>
        </div>
        <div className='ccp-text'>
          <Row between='xs'>
            <Col xs className='ccp-caption'>
              <img className='ccp-sketch' src={ccpSketch1}/>
              <div className='project-detail'>
                Vertical dropdown menu
              </div>
            </Col>
            <Col xs className='ccp-caption'>
              <img className='ccp-sketch' src={ccpSketch2}/>
              <div className='project-detail'>
                Side menu
              </div>
            </Col>
            <Col xs className='ccp-caption'>
              <img className='ccp-sketch' src={ccpSketch3}/>
              <div className='project-detail'>
                Workshop sign-up form
              </div>
            </Col>
          </Row>
        </div>

        {/* Prototype */}
        <div className='ccp-prototype ccp-text'>
          <div className='ccp-subtitle'>
            Prototype
          </div>
          <div className='project-detail'>
            We finalized the layout changeds and made high-fidelity mockup. 
            Have a look at the updated visuals & layout!
          </div>
        </div>
        <div className='ccp-text'>
          <Row between='xs'>
            <Col xs className='ccp-caption'>
              <img className='ccp-proto' src={ccpProto1}/>
            </Col>
            <Col xs className='ccp-caption'>
              <img className='ccp-proto' src={ccpProto2}/>
            </Col>
          </Row>
          <Row between='xs'>
            <Col xs className='ccp-caption'>
              <img className='ccp-proto' src={ccpProto3}/>
            </Col>
            <Col xs className='ccp-caption'>
              <img className='ccp-proto' src={ccpProto4}/>
            </Col>
          </Row>
        </div>

      {/* Takeaway */}
        <div className='ccp-prototype ccp-text'>
          <div className='ccp-subtitle'>
            Key Takeaway
          </div>
          <div className='project-detail'>
            1. <b>Working with constraints is crucial. </b> 
            While working with a real client, the first thing you notice is that 
            there are a lot of constraints. It might seem difficult to be creative at first, 
            but it later makes your job easier; more importantly, learning how to work with constraints
            will be enormously helpful for future career.<br/> <br/>
            2. <b>Good UX is beyond visuals. </b>
            Much of the work is done on information architecture for this project, so it is difficult
            to see the changes visually. However, it is just as important, if not more, to have 
            the right information architecture for good UX.
          </div>
        </div>

      </div>
    );
  }
}

export default CCP;