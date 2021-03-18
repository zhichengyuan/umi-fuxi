import React from 'react'
import {history} from 'umi'

export default function welcome() {
    const loginId = localStorage.getItem('loginId')
    return (
        <div>
            h1 欢迎你，{loginId}
            <p>
                <button onClick={() => {
                    localStorage.setItem("loginId",null)
                    history.push('/login')
                }}>注销</button>
            </p>
        </div>
    )
}
