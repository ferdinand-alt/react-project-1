import React from 'react'
import styled from 'styled-components'
import {About} from '../styles'

function FaqSection() {
    return (
      <Faq>
        <h2>
          Questions <span>FAQ</span>
        </h2>
        <div className="question">
          <h4>What are the subsidy options?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Wich safety garanty can you give us?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>In wich festivals, events are you specialised?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Are there restrictions?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Faq>
    );
}

const Faq = styled(About)`
display: block;
span {
  display: block;
}
h2 {
  padding-bottom: 2rem;
  font-weight: lighter;
}
/* dit is de lijn */
.faq-line {
  background: white;
  height: 0.2rem;
  margin: 2rem 0rem;
  width: 100%;
}
.question {
  padding: 3rem 0rem;
  cursor: pointer;
}
.answer {
  padding: 2rem 0rem;
  p {
    padding: 1rem 0rem;
  }
}
`

export default FaqSection
