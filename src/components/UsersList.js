import React from "react";

function UsersList(){

  const users= [
    {id: 1, firstName: "Duane", lastName: "Watson"},
    {id: 2, firstName: "Duane", lastName: "Johnson"},
    {id: 3, firstName: "Jennifer", lastName: "Lawrence"},
    {id: 4, firstName: "Jennifer", lastName: "Lopez"}
  ];

  const useHeading= users.map((user)=>{
    return <h1 key={user.id}style={{fontSize: 14}}>{user.lastName}</h1>
  });

  return (
    <div>
      <h2>List of users</h2>
      <ol>
        {useHeading}
      </ol>
    </div>
  )
}


export default UsersList;