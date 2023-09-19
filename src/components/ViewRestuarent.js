import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Restop from './Restop'
import RestReviews from './RestReviews'
import { useDispatch, useSelector } from 'react-redux'
import {AllRestuarantList} from '../actions/fetchRestuarantAction'


function ViewRestuarent() {

  // get path parameter
  const {id} = useParams()

  const dispatch = useDispatch()

  const {allRestaurants} = useSelector(state=>state.restaurantListReducer)
  const restaurant = allRestaurants.find(item=>item.id==id)


  useEffect(()=>{
    dispatch(AllRestuarantList())
  },[])
  // console.log(restaurant)

  return (
    <>
      {
        restaurant&&
        <Row>
        <Col md={1}></Col>
        <Col md={3}>
          <Image className='border rounded p-1' src={restaurant.photograph} fluid></Image>
        </Col>
        <Col md={1}></Col>
        <Col md={6}>
        <ListGroup>
          <ListGroup.Item>
            <h2>{restaurant.name}</h2>
            <h5>{restaurant.neighborhood}</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <h4>Cuisin : {restaurant.cuisine_type}</h4>
          </ListGroup.Item>
          <ListGroup.Item>
            <Restop opHour={restaurant.operating_hours}/>
          </ListGroup.Item>
          <ListGroup.Item>
            <RestReviews reviews={restaurant.reviews} /> 
          </ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
      }
    </>
  )
}

export default ViewRestuarent