import { NextResponse } from "next/server";
import dbConnection from "@/config/dbConnection";
import blogModel from "@/app/models/blog";


dbConnection()
// get api
export async function GET(req) {
    try {

        const getAllBlogs = await blogModel.find()

        return NextResponse.json({
            sucess: true,
            message: "This is api response",
            getAllBlogs
        }, { status: 200 })

    } catch (error) {
        console.log(error)
    }

}

// post api
export async function POST(req) {
    try {

        const body = await req.json()

        const addNewBlog = await blogModel.create(body)

        return NextResponse.json({
            success: false,
            message: "Blog Created succesfully",
            addNewBlog
        })
        
    } catch (error) {
        console.log(error)
    }
}

