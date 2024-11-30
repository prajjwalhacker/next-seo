import { Metadata } from 'next';
import React from 'react'
import Link from 'next/link';

export const metadata : Metadata = {
    title: "Users page brtoher",
    description: "In this page all Users profile will be listed"
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
}

async function UsersPage() {
  const response = await fetch('https://dummyjson.com/users');
  const res = await response.json();

  console.log("resss");
  console.log(res);

  return (
    <div>
        Users Page
        <div>
        {res.users.map((item: User)=>{
            return (
                <div key={item.id}>
                    <Link href={`/users/${item.id}`}>User</Link>
                    <div>
                        {item.firstName}
                    </div>
                    <div>
                        {item.lastName}
                    </div>
                    <div>
                        {item.age}
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default UsersPage;