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

export async function generateMetadata({ params }){

  console.log("meta data regeneration");
  
  const response = await fetch(`https://dummyjson.com/users/${params.id}`);
  const user = await response.json();

  return {
    title: user.firstName,
    description: user.lastName,
    openGraph: {
      title: user.firstName,
      description: user.lastName,
      url: `https://cosmofeed-group-picture-prod.s3-ap-south-1.amazonaws.com/my_image1732650047-2024-26-11-07-40-46.png`,
      images: [
        {
          url: 'https://cosmofeed-group-picture-prod.s3-ap-south-1.amazonaws.com/my_image1732650047-2024-26-11-07-40-46.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  };


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