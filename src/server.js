import  express  from "express";
import helmet from "helmet";
import cors from 'cors'

import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 8080;
// API REATE LIMIT
import { rateLimit } from 'express-rate-limit'
import compression from "compression";

const limiter = rateLimit({
	windowMs:  60 * 1000, // 1 minute
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

// Compresses the api
app.use(compression())

// Apply the rate limiting middleware to all requests.
app.use(limiter)


// this converts the response data  to a json object
app.use(express.json());

// helmet protects the api 
app.use(helmet());

// cors
app.use(cors())

app.use('/v1/', mainRoutes )
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
});
