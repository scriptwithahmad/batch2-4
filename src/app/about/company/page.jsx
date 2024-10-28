import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <h2 className='text-2xl'>This is Nested Route of About
                <span className='text-green-500'> company</span>
            </h2>
        </div>
    )
}

export default page
