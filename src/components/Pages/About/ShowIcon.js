import React from 'react'
import {Card } from 'react-bootstrap';


const ShowIcon = ({ icon, name }) => {
  return (
    <Card key={name} >
      {icon}
      <Card.Body>
        <Card.Text>{name}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ShowIcon