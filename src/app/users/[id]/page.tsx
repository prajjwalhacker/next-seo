import React from 'react'



//// It is server side rendered component
async function UserPage({ params }: { params: Promise<{ id: string }>}) {

 const res = await params;
  
  return (
    <div>
        {res.id}
        UserPage lululu
    </div>
  )
}
export default UserPage