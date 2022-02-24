import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';


import route from './Routes/routes.js';

const app = express();
const PORT = 8000;
const URL = 'mongodb+srv://tasksontable:tasksontable2022@clusterzero.qpxtt.mongodb.net/ClusterZero?retryWrites=true&w=majority';

app.use(bodyParser.json({ extended : true }));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors());
app.use('/users', route);


mongoose.connect(URL, { usenewurlparser : true, useunifiedtopology : true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running successfully on PORT : ${PORT}`);
    });
}).catch(error => {
    console.log('Error : ', error.message);
});

// mongoose.disconnect();

