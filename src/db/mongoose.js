const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sanjay:12345@cluster0.sa4sbyc.mongodb.net/task-manager-api?retryWrites=true&w=majority')
// mongoose.connect('mongodb://127.0.0.1/task-manager-api?retryWrites=true&w=majority')
// mongoose.connect('mongodb://localhost/task-manager-api')
module.exports = mongoose