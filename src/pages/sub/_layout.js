import React from 'react'

export default function layout(props) {
    return (
        <div>
            <h1>sub页面通用的子菜单</h1>
            <div>{props.children}</div>
        </div>
    )
}
