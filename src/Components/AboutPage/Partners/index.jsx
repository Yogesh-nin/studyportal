import React from 'react'
import { Container } from 'react-bootstrap'
import './index.css'
import img from '../../../Assets/about/Website-2-6.png'
const Partner = () => {
  return (
    <Container fluid className="partner-section">
        <h3>Our Partners</h3>
        <div>
            <p>We collaborate with both student and academic organisations worldwide, and we are proud of our meaningful partnerships!</p>

            <p>Read more about Our Partners</p> 
            <img src={img} alt="" className='img img-fluid' />
        </div>
    </Container>
  )
}

export default Partner