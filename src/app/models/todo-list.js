import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}
);

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', todoSchema)

export default TodoModel

