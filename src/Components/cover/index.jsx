import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './index.css'
const Cover = () => {
  return (
    <Container fluid className='cover d-flex justify-content-center'>
        <div>
            <h3>Working with us - more than just a job</h3>
            <p>At Studyportals, we are determined to make education choice transparent, <br/> globally. <br/> Join our mission!</p>
            <div className='d-flex justify-content-center'>
                <Button id="orange-btn">Check our careers</Button>

            </div>
        </div>
    </Container>
  )
}

export default Cover