import  express  from "express";
import helmet from "helmet";

import mainRoutes from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 3000;
// API REATE LIMIT
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs:  60 * 1000, // 1 minute
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)


// this converts the response data  to a json object
app.use(express.json());

// helmet protects the api 
app.use(helmet());

app.use('/v1/', mainRoutes )
app.use('/v1/user', userRoutes);


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
});
