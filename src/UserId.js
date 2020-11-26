import React from 'react';
import { useParams } from "react-router-dom";

function UserId (){
 let {userName} = useParams()
 return(
     <div>
         <a href="/React-01/users">Назад</a>
         <h1>User: {userName}</h1>
     </div>
 );
}

export default UserId;