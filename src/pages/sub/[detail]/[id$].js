import React from 'react'

export default function Detail(props) {
    console.log('带参数的',props);
    return (
        <div>
            <h2>带参数的{props.match.params.detail}</h2>
            <h2>带参数的{props.match.params.id}</h2>
        </div>
    )
}
