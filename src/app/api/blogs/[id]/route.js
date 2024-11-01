import blogModel from "@/app/models/blog";
import dbConnection from "@/config/dbConnection";
const { NextResponse } = require("next/server");

dbConnection()

export async function GET(req, { params }) {
    try {
        console.log(params.id)

        const getSingleBlog = await blogModel.findById(params.id)

        return NextResponse.json({
            success: true,
            message: "Blog found",
            getSingleBlog
        })

    } catch (error) {
        console.log(error)
    }

}

