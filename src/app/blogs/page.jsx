import Link from 'next/link'
import React from 'react'

const data = [
    {
        id: 1,
        title: 'Blog 01',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus, eligendi voluptatem tempora porro natus numquam illum vero officia quam eum"
    },
    {
        id: 2,
        title: 'Blog 02',
        desc: "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components."
    },
    {
        id: 3,
        title: 'Blog 03',
        desc: "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js"
    },
    {
        id: 4,
        title: 'Blog 04',
        desc: "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js"
    },
]
const Page = () => {

    // let a = "world"

    // console.log(`hello ${a}`)

    return (
        <div className='grid grid-cols-3 gap-5 p-14'>

            {data?.map((v, i) => {
                return (

                    <div key={i} className='ring bg-blue-100 rounded-lg text-sm p-4'>
                        <Link href={`/blogs/${v.id}`} className='text-xl text-gray-700 font-semibold hover:underline'>
                            {v?.title}
                        </Link>
                        <p className='mt-2 text-sm text-gray-700'>
                            {v?.desc}
                        </p>
                    </div>
                )
            })}



        </div>
    )
}

export default Page
// {'/blogs/v.id'}