import React from 'react'
interface CardProps {
    title: string;
    desc: string;
    posted_by: string;
  }
const Card = (props:CardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-2">{props.title}</h2>
    <p className="text-gray-600 mb-4">{props.desc}</p>
    <p className="text-gray-500">Posted by: {props.posted_by}</p>
  </div>
  )
}

export default Card