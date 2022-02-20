// const express = require('express');
import express from 'express';
import { get } from 'http';
import mongoose from 'mongoose';

const app = express();
const route = express.Router();
route.get('/', (request, response) => {
    response.status(200).json('connected to MONGO and able to connect with API');
});
app.use('/users', route);

const PORT = 8000;
const URL = 'mongodb+srv://tasksontable:tasksontable2022@clusterzero.qpxtt.mongodb.net/ClusterZero?retryWrites=true&w=majority';

mongoose.connect(URL, { usenewurlparser : true, useunifiedtopology : true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running successfully on PORT : ${PORT}`);
    });
}).catch(error => {
    console.log('Error : ', error.message);
});

mongoose.disconnect();

