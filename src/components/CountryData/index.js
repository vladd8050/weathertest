import React from 'react'
import is from 'is_js'
import { Row, Col } from 'antd'

import 'antd/lib/grid/style/index.css';

export const CountryData = ({ countryData = {}, children }) => {
  return (
    <>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Row>
            <Col span={12}>Capital</Col>
            <Col span={12}>{countryData.capital}</Col>
          </Row>          
          <Row>
            <Col span={12}>Population</Col>
            <Col span={12}>{countryData.population}</Col>
          </Row>          
          <Row>
            <Col span={12}>Lat Lng</Col>
            <Col span={12}>{countryData.latlng && countryData.latlng.map((item, i) => <div key={`latlng-${i}`}>{item}</div>)}</Col>
          </Row>          
          <Row>
            <Col span={24}><img src={countryData.flag} alt="flag" style={{width: '33%'}} /></Col>
          </Row>
        </Col>
        <Col span={8}></Col>
      </Row>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
      <div>
        {children}
      </div>
      </Col>
        <Col span={8}></Col>
      </Row>
    </>
  )
}