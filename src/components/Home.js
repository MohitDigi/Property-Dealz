import React from 'react'
import Navbar from './Navbar'

import SortItem from "./SortItem";
import Map from "./Map";
import { Col, Divider, Row } from "antd";
import CardItem from "./CardItem";

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  
const Home = () => {
  return (
    <>
      <Row gutter={[24, 8]} >
        <Col span={12} >
          <Map location={location} zoomLevel={17} />
        </Col>
        <Col span={12}>
          <SortItem />
          <CardItem />
        </Col>
      </Row>
    </>
  )
}

export default Home