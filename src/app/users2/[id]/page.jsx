import React from 'react'


export const  generateStaticParams  = async () => {

    return [
        {
            id: "1"
        },
        {
            id: "2"
        },
        {
            id: "3"
        }
    ]
}

async function UserPage({ params }) {
  
    const response = await fetch(`https://dummyjson.com/users/${params.id}`);
    const user = await response.json();

    console.log("user");
    console.log(user);

  return (
    <div>{user.firstName}</div>
  )
} 

export default UserPage