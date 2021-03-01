import React from 'react'
import './feed.scss'
import Stories from '../stories/Stories'

export default function Feed() {
    return (
        <div className="container-feed d-flex align-items-center my-4 border-3">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((n) => <Stories key={n} />)}
        </div>
    )
}
