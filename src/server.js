import  express  from "express";

import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 3000;


// this converts the response data  to a json object
app.use(express.json());
app.use('/v1/', mainRoutes )
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
});
