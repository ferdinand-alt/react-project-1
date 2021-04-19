import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import {ServicesState} from '../servicesState'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const ServicesDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [services, setServices] = useState(ServicesState);
    const [service, setService] = useState(null)

    // useEffect
    useEffect(() => {
        const currentService = services.filter((state) => state.url === url);
        setService(currentService[0])
    }, [services, url])

    return (
      <>
        {service && (
          <Details
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <HeadLine>
              <h2>{service.title}</h2>
              <img src={service.mainImg} alt="service" />
            </HeadLine>
            <Info>
              {service.information.map((info) => (
                <SingleInfo
                  title={info.title}
                  key={info.title}
                  description={info.description}
                />
              ))}
            </Info>
            <ImageDisplay>
              <img src={service.secondaryImg} alt="foto" />
            </ImageDisplay>
          </Details>
        )}
      </>
    );
}

const Details = styled(motion.div)`
color: white;
`

const HeadLine = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;
h2 {
    position: absolute;
    top:10%;
    left: 50%;
    transform: translate(-50%, -10%)
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`
const Info = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;
`

const InfoStyle = styled.div`
padding: 5rem;
h3 {
    font-size: 2rem;
}
.line {
    width: 100%;
    background: greenyellow;
    height: 0.5rem;
    margin: 1rem 0rem;
    p{
     padding: 2rem 0rem;
    }
}
`

const ImageDisplay = styled.div`
min-height: 50vh;
img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`

// SingInfo component
const SingleInfo = ({title, description }) => {
    return (
        <InfoStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </InfoStyle>
    )
}
export default ServicesDetail
