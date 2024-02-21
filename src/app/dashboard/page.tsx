import React from 'react'
import Navbar from '../_component/navbar/page'
import Card from '../_component/card/page'
const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4">
      <div className="grid my-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {/* Repeat the card component three times */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md"><Card title= "abc" desc= "asfsdgfdg" posted_by= "asfsdgdg" /></div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md"><Card title= "abc" desc= "asfsdgfdg" posted_by= "asfsdgdg" /></div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md"><Card title= "abc" desc= "asfsdgfdg" posted_by= "asfsdgdg" /></div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md"><Card title= "abc" desc= "asfsdgfdg" posted_by= "asfsdgdg" /></div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md"><Card title= "abc" desc= "asfsdgfdg" posted_by= "asfsdgdg" /></div>
        
      </div>
    </div>
    </>
  )
}

export default Dashboard