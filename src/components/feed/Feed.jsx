import React from 'react'
import './feed.scss'
import Stories from '../stories/Stories'
import { Carousel } from 'react-bootstrap'

export default function Feed() {
    return (
        <div className="container-feed d-flex align-items-center my-4 border-3">
            <Carousel>
                <Carousel.Item className="d-flex carousel ">
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => <Stories key={n} />)}
                </Carousel.Item>
                <Carousel.Item className="d-flex carousel ">
                    {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => <Stories key={n} />)}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
