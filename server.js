const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UsersRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://rootRoot:root@cluster0.aungh.mongodb.net/gbc_full_stack?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


app.use(userRouter);

app.listen(4000, () => { console.log('Server is running...') });