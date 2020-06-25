import React from 'react'
import is from 'is_js'
import { Row, Col } from 'antd'

import 'antd/lib/grid/style/index.css';

export const WeatherData = ({ weatherData }) => {
    const { current: { temperature, wind_speed, precip, weather_icons } = {} } = weatherData
    return (
        <>
            <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <Row>
                        <Col span={12}>Temperature</Col>
                        <Col span={12}>{temperature}</Col>
                    </Row>
                    <Row>
                        <Col span={12}>Wind Speed</Col>
                        <Col span={12}>{wind_speed}</Col>
                    </Row>
                    <Row>
                        <Col span={12}>Precip</Col>
                        <Col span={12}>{precip}</Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            {is.array(weather_icons) && (
                                <img src={weather_icons[0]} alt="weather icon" />
                            )}
                        </Col>
                    </Row>
                </Col>
                <Col span={8}></Col>
            </Row>
        </>
    )
}