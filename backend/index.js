import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './route/stockRoute';

let app = express();
app.use(cors())
mongoose.Promise = global.Promise;
app.set('view engine', 'ejs');
mongoose.connect("mongodb://localhost/stockDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render('index',{
        context:"Dark Devil"
    })
    console.log("app is running on port " + PORT);
});

app.listen(PORT);

route(app)