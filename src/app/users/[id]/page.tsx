import React from 'react'





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