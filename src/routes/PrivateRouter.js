import React from 'react'
import {Link} from 'umi'

export default function PrivateRouter(props) {
    var loginId = localStorage.getItem('loginId')
    if(loginId) {
        return props.children
    }else {
        return <div>
            <p>
                该页面必须要登录后才可以访问，<Link to="/login">请先登录</Link>
            </p>
        </div>
    }
}
