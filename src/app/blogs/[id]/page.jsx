'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'


const Page = ({ params }) => {
    // console.log(params.id)

    const router = useRouter()
    console.log(router);

    var path = usePathname()
    path = path.split("/")[1]


    return (
        <div className='p-6 max-w-[1000px] m-auto'>

            <button onClick={() => router.back()} className='mb-4 rounded-md px-2 py-1 bg-gray-300 text-sm'>go back</button>

            {/* breadcrums */}
            <div>
                <Link href={"/"}>Home</Link>
                <span> / </span>
                <Link href={`/${path}`}>
                    {path}
                </Link>
                <span className='text-gray-500 cursor-not-allowed'> / {params.id}</span>
            </div>

            <h3 className='text-3xl text-center font-semibold'>
                This is Detail page of {params.id}
            </h3>
        </div>
    )
}

export default Page
