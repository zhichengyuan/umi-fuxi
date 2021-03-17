import React from 'react'
import { history } from 'umi';
import A from '../components/A'

export default function a(props) {
    console.log(props)
    return (
        <div>
            <h1>页面a</h1>
            <button onClick={() => {
                history.push('/b')
            }}>跳转到b页面</button>
            <div><A/></div>
        </div>
    )
}