import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestaurentCard({restuarent}) {
  return (
    <Link to={`/view/${restuarent.id}`} style={{'textDecoration':'none'}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={restuarent.photograph} style={{'height':'250px'}}/>
        <Card.Body>
          <Card.Title>{restuarent.name.slice(0,14)}..</Card.Title>
          <Card.Text>
          {restuarent.neighborhood}
          </Card.Text>
          <Card.Text>
          {restuarent.cuisine_type}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RestaurentCard