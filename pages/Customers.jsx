import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import { data } from "../data/data.js"

const Customers = () => {
    return (
        <div className='bg-gray-400 min-h-screen'>

            <div className='flex justify-between p-4'>
                <h2>Customers</h2>
                <h2>WellCome Back, Client</h2>
            </div>

            <div className='p-4 '>
                <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-2 items-center justify-between cursor:pointer'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Email</span>
                        <span className='hidden md:grid '>Last Order</span>
                        <span className='hidden md:grid '>Method</span>
                    </div>

                    <ul>
                        {
                            data.map((eachdata, id) => {
                                return (
                                    <li key={id} className="bg-gray-300 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">

                                        <div className='flex items-center'>
                                            <div className='bg-purple-100 p-3 rounded-lg'>
                                                <BsPersonFill className='text-purple-800' />
                                            </div>


                                            {/* <p>{eachdata.name.first + " " + eachdata.name.last}</p> */}
                                            <p className='pl-4'> {`${eachdata.name.first} ${eachdata.name.last}`} </p>
                                        </div>
                                        <p className='text-gray-600 sm:text-left text-right '> { `${eachdata.name.first}@gmail.com` } </p>
                                        <p className='hidden md:flex'> { eachdata.date } </p>

                                        <div className='sm:flex hidden justify-between items-center'>
                                            <p> {eachdata.method} </p>
                                            <BsThreeDotsVertical/>
                                        </div>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Customers
