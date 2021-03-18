import React from 'react'
// import { Link } from 'umi';//实际上就是react-router-dom中的Link组件
import { NavLink } from 'umi';//实际上就是react-router-dom中的NavLink组件
// import Link from 'umi/Link' //实际上就是react-router-dom中的Link组件
// import NavLink from 'umi/NavLink' //实际上就是react-router-dom中的NavLink组件
// import Menu from '@/components/Menu'
import './index.css'

export default function index(props) {
    return (
        <div>
            <div>
                <NavLink to="/">首页</NavLink>
                <NavLink to="/login">登录页</NavLink>
                <NavLink to="/welcome">欢迎页1</NavLink>
                
                {/* <Menu></Menu> */}
            </div>
            {props.children}
            <div>
                <h1>页脚</h1>
            </div>
        </div>
    )
}