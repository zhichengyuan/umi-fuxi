import React from 'react'
// import { Link } from 'umi';//实际上就是react-router-dom中的Link组件
import { NavLink } from 'umi';//实际上就是react-router-dom中的NavLink组件
// import Link from 'umi/Link' //实际上就是react-router-dom中的Link组件
// import NavLink from 'umi/NavLink' //实际上就是react-router-dom中的NavLink组件
// import Menu from '@/components/Menu'
import styles from './index.css'
import Layout from '../components/Layout'
import Aside from '../components/Aside'
import MenuContainer from '../components/containers/MenuContainer'

export default function index(props) {
    if(props.location.pathname === '/login') {
        //登录页
        return props.children;
    }else {
        return (
                <Layout
                    aside={<Aside/>}
                    header={<MenuContainer/>}
                    // aside='dddd'
                >
                    <div className={styles.main}>
                        {props.children}
                    </div>
                </Layout>
        )

    }
    
}