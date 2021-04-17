import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUsers, faMoneyBillWave, faHandshake } from "@fortawesome/free-solid-svg-icons"
import { About, Description, ImgServices, Hide } from "../styles";


function ServicesSection() {
    return (
      <Services>
        <Description>
          <h2>Our Services</h2>
          <Cards>
            {/* CARD 1  EFFICIENT*/}
            <Card>
              <div className="icon">
                <FontAwesomeIcon size="2x" icon={faClock} />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            {/* CARD 2  TEAM*/}
            <Card>
              <div className="icon">
                <FontAwesomeIcon size="2x" icon={faUsers} />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            {/* CARD 3  Efficient*/}
            <Card>
              <div className="icon">
                <FontAwesomeIcon size="2x" icon={faMoneyBillWave} />
                <h3>Costs</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            {/* CARD 4  Efficient*/}
            <Card>
              <div className="icon">
                <FontAwesomeIcon size="2x" icon={faHandshake} />
                <h3>Trust</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <ImgServices></ImgServices>
      </Services>
    );
}

const Services = styled(About)`
background-color: lightblue;
h2 {
  padding-bottom: 5rem;
}
p {
  width: 70%;
  padding: 2rem 0rem 4rem 0rem;
}
`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`

const Card = styled.div`
flex-basis: 20rem;
.icon {
  display: flex;
  align-items: center;
  h3{
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
}
`

export default ServicesSection
