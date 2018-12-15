var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null
    },
    _createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    }
});

module.exports = { Todo };