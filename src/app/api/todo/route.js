import dbConnect from "@/app/lib/db";
import TodoModel from "@/app/models/todo-list";
import { NextResponse } from "next/server";



export const POST = async (request) => {
    try {
        const { title, description } = await request.json();
        if (!title || !description) return NextResponse.json({ success: false, message: 'All filed required' })
        dbConnect()
        const todo = new TodoModel({
            title,
            description,
        })
        await todo.save()
        return NextResponse.json({ success: true, message: 'todo is created successfully...', todo }, { status: 201 })
    } catch (error) {
        return new NextResponse(error.message, { status: 400 })
    }
}


export const GET = async (request) => {
    try {
        dbConnect()
        const todo = await TodoModel.find()
        if (!todo) return NextResponse.json({ success: false, message: 'Not data found' })
        return NextResponse.json({ success: true, todo })
    } catch (error) {
        return new NextResponse(error.message, { status: 400 })
    }
}