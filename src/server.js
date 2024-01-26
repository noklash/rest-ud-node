import  express  from "express";
import helmet from "helmet";

import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 3000;


// this converts the response data  to a json object
app.use(express.json());

// helmet protects the api 
app.use(helmet());

app.use('/v1/', mainRoutes )
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
});
