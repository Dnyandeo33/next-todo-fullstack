import dbConnect from "@/lib/db";
import TodoModel from "@/models/todo-list";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        await dbConnect()
        const todo = await TodoModel.findById(id);
        if (!todo) {
            return new Response("Todo not found", { status: 404 });
        }
        return NextResponse.json({ success: true, todo })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}


export const PUT = async (request, { params }) => {

    try {
        const { id } = params;
        const { title, description } = await request.json();

        await dbConnect()
        const todo = await TodoModel.findById(id);
        if (!todo) return NextResponse.json({ success: false, message: 'todo not found' }, { status: 404 })

        const updateTodo = await TodoModel.findByIdAndUpdate(id, {
            $set: {
                title,
                description
            }
        }, { new: true })

        return NextResponse.json({ success: true, message: `todo is update`, updateTodo })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}


export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;
        await dbConnect()
        const todo = await TodoModel.findById(id);

        if (!todo) return NextResponse.json({ success: false, message: 'todo not found' }, { status: 404 })
        await TodoModel.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: 'todo is deleted' })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }

}
