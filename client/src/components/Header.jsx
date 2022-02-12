import React, { useState } from 'react'
// import axios from "axios";
import { Acordion } from './Acordion'
import { Button } from 'react-bootstrap'
// import { Row, Col, TabContent, TabPane } from 'reactstrap'

export default function Header() {

    const [key, setkey] = useState("0")


    return (
        <div> <div>
            <Button variant="outline-primary" onClick={() => {
                setkey("0")
            }}>Account</Button>{' '}
            <Button variant="outline-primary" onClick={() => {
                setkey("2")
            }}>Security</Button>{' '}
            <Button variant="outline-primary" onClick={() => {
                setkey("3")
            }}>Billing & Plans</Button>{' '}
            <Button variant="outline-primary" onClick={() => {
                setkey("4")
            }}>Notifications</Button>{' '}
        </div>
            <div>
                {key === "0" && <Acordion />}

            </div>

        </div>
    )
}
