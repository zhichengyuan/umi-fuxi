import React from 'react'
import StudentPager from '@/components/containers/StudentPager'
import StudentTableContainer from '@/components/containers/StudentTableContainer'
import StudentSearchBarContainer from '@/components/containers/StudentSearchBarContainer'
import StudentTableLoading from '@/components/containers/StudentTableLoading'

 function index() {
    return (
        <div>
            <StudentSearchBarContainer/>
            <StudentTableContainer/>
            <StudentPager/>
            <StudentTableLoading/>
        </div>
    )
}

index.wrappers = ['@/routes/PrivateRouter'];

export default index;
