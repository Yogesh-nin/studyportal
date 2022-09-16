import React from 'react'
import { Accordion, Card } from 'react-bootstrap'


const AccordionTabs = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          {/* <CustomToggle eventKey="1">How can I contact a university?</CustomToggle> */}
          
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default AccordionTabs