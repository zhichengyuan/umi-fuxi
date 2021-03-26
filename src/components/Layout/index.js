import React from 'react'
import styles from './index.less'
import PropTypes from 'prop-types'

export default function Layout(props) {
    return (
        <>
            <div className={styles.header}>
                {props.header}
            </div>
            <div className={styles.main}>
                <div className={styles.left}>
                    {props.aside}
                </div>
                <div className={styles.right}>
                    {props.children}
                </div>
            </div>
        </>
    )
}
Layout.Proptypes = {
    header:PropTypes.node,
    aside:PropTypes.node,
    children:PropTypes.node
}
