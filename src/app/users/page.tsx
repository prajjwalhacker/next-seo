import { Metadata } from 'next';
import React from 'react'

export const metadata : Metadata = {
    title: "Users page brtoher",
    description: "In this page all Users profile will be listed"
}

async function UsersPage() {
  const response = await fetch('https://dummyjson.com/users');
  const res = await response.json();

  console.log("resss");
  console.log(res);

  return (
    <div>
        Users Page
         
    </div>
  )
}

export default UsersPage;