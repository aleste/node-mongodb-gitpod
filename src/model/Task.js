const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
    task: String,
    description: String
})

module.exports = model('Task', taskSchema);