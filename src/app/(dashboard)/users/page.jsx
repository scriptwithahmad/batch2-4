import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <h2>Users page</h2>
            <div className="grid grid-cols-3 gap-4">
                {/* user 01 */}
                <div className='border rounded-lg text-sm p-2'>   
                    <Link href={"/users/1"}>user 1</Link>
                    <p>user 1 description</p>
            </div>
                {/* user 02 */}
                <div className='border rounded-lg text-sm p-2'>
                    <Link href={"/users/2"}>user 2</Link>
                    <p>user 2 description</p>
                </div>
                {/* user 03 */}
                <div className='border rounded-lg text-sm p-2'>
                    <Link href={"/users/3"}>user 3</Link>
                    <p>user 3 description</p>
                </div>

            </div>
        </div>
    )
}

export default Page
