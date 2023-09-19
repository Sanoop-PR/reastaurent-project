import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import RestaurentCard from './RestaurentCard'
import { useDispatch, useSelector } from 'react-redux'
import {AllRestuarantList} from '../actions/fetchRestuarantAction'

function AllRestuarent() {

  const dispatch = useDispatch()

 
  useEffect(() => {
    dispatch(AllRestuarantList())
  }, [])
  
  // select update state from store
  const {allRestaurants} = useSelector(state=>state.restaurantListReducer)
  console.log(allRestaurants)

  return (
    <Row>
      {
        allRestaurants.map(item=>(
          <Col className='p-4' sm={6} md={4} lg={3}>
            <RestaurentCard restuarent={item} />
          </Col>
        ))
      }
    </Row>
  )

}

export default AllRestuarent