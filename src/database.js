const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<user>:<password>@cluster0-eio5b.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('DB connected')
    })
    .catch(() => {
        console.log('Error in DB connection ')
    })

