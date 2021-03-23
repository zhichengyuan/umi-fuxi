 import { searchStudents } from '@/services/student'
 import React from 'react'

 function Home() {
    searchStudents().then(res => console.log(res));
     return (
         <div>
             <h1>首页欢迎你 </h1>
         </div>
     )
 }
 Home.title = '首页';
 Home.wrappers = ['@/routes/HandleTitle'];
 export default Home;