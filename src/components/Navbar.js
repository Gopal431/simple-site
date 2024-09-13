import React from 'react'

const Navbar = () => {
    return (
        <div>
            <img className='w-full relative' src='https://images.pexels.com/photos/289290/pexels-photo-289290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='mal' />
            <div className='flex justify-between  py-5 px-4 absolute top-0 left-0 w-full'>
                <div>
                    <h1 className='text-3xl font-extrabold font-serif cursor-pointer'>Subo & <span className=' font-thin text-gray-300'>Amit</span></h1>
                </div>
                <div className=' flex space-x-5'>
                    <h1 className='text-lg font-semibold cursor-pointer'>Home</h1>
                    <h1 className='text-lg font-semibold'>About</h1>
                    <h1 className='text-lg font-semibold'>Profile</h1>
                    <h1 className='text-lg font-semibold'>Contact</h1>
                    <button className='w-20 h-8 text-black border border-black rounded-full'>Sign up</button>
                </div>
            </div>
            <div className='w-80  absolute right-5 top-48 bg-gray-200 h-80 p-10 rounded-lg opacity-40'>
                <div className='flex flex-col'>
                    <h1 className='text-center my-2 font-bold text-3xl'>Login</h1>
                    <input type='email' placeholder='Enter Your Email' className='border border-black focus:outline-none h-10 text-center rounded-full' />
                    <input type='password' placeholder='Enter Your Password' className='border border-black focus:outline-none h-10 text-center rounded-full my-10'   />
                    <button className='w-full text-center bg-indigo-500 rounded-full text-white  h-10'>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar