import React from 'react'

const Page = ({ params }) => {

    console.log(params.id)
    let id = params.id

    return (
        <div>
            <h2 className='text-2xl font-semibold'>Welcome Back!
                <span className='text-green-500'> User {id} </span>
            </h2>
        </div>
    )
}

export default Page
