import React, {useState} from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
// Neemt waar wanneer de layOut veranderd, zo ja? = animate
import {AnimateSharedLayout} from 'framer-motion'

function FaqSection() {
 
    return (
      <Faq>
        <h2>
          Questions <span>FAQ</span>
        </h2>
        {/* je hebt nu toegang tot de children */}
        <AnimateSharedLayout>
          <Toggle title="How do I start?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <Toggle title="Wich safety garanty can you give us?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <Toggle title="In wich festivals, events are you specialised?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
        <AnimateSharedLayout>
          <Toggle title="Are there restrictions?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
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
