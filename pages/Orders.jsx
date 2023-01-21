import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data'

const Order = () => {
  return (

    <div className='bg-gray-400 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2 >Orders</h2>
        <h2>WellCome To Orders</h2>
      </div>

      <div className='p-4 '>

        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>

          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Order</span>
            <span className='sm:text-left text-right '>Status</span>
            <span className='hidden md:grid'>Last sorder</span>
            <span className='hidden sm:grid'>Method</span>
          </div>

          <ul>
            {
              data.map((eachdata, id) => (
                <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center jsutify-between cursor-pointer">
                  <div className='flex'>
                    <div className='bg-purple-100 p-3 rounded-lg'>
                      <FaShoppingBag className='text-purple-800' />
                    </div>
                    <div className='pl-4 '>
                      <p className='text-gray-800 font-bold'>${eachdata.total.toLocaleString()}</p>
                      <p className='text-gray-800 text-sm'>{eachdata.name.first}</p>
                    </div>
                  </div>
                  <p className='text-gray-600 sm:text-left text-right'>
                    <span className={
                      eachdata.status == "Processing" ? "bg-green-200 p-2 rounded-lg" : eachdata.status == "Completed" ? "bg-blue-200 p-2 rounded-lg " : "bg-yellow-200 p-2 rounded-lg" }>
                      {eachdata.status}
                    </span>
                  </p>
                  <p className='hidden md:flex'> {eachdata.date} </p>
                  <div className='sm:flex hidden justify-between items-center'>
                    <p> {eachdata.method} </p>
                    <BsThreeDotsVertical/>
                  </div>

                </li>
              ))
            }
          </ul>

        </div>

      </div>
    </div>

  )
}

export default Order
