import  express  from "express";


import appRoutes from './routes';

const app = express();
const port = 3000;


// this converts the response data  to a json object
app.use(express.json());

app.use('/v1', appRoutes);


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
});
