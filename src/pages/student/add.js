import React from 'react'

function add() {
    return (
        <div>
            <h1>添加学生页</h1>
        </div>
    )
}

add.wrappers = ['@/routes/PrivateRouter'];
export default add;