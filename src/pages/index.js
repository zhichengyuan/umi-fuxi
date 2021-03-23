 import { getAllStudents } from '@/services/student'
 import React from 'react'

 function Home() {
     getAllStudents().then(res => console.log(res));
     return (
         <div>
             <h1>首页1杀杀杀ss </h1>
         </div>
     )
 }
 Home.title = '首页';
 Home.wrappers = ['@/routes/HandleTitle'];
 export default Home;