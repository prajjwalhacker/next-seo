import React from 'react'
import Link from 'next/link';
import { User } from '../users/page';

async function Users2Page() {

  const response  = await fetch('https://dummyjson.com/users');
  const res = await response.json();

  console.log("ress");
  console.log(res);

  return (
    <div>
        Users 2 Page
        <div>
            {(res.users || []).map((item: User) => {
                return (
                    <div key={item.id}>
                        <Link href={`/users2/${item.id}`}>
                        User 2
                        </Link>   
                        {item.firstName}
                    </div>
                )
            })}
        </div>   
    </div>
  )
}

export default Users2Page