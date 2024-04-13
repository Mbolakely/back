// App.ts
// nps tsx index.ts {startup command}
import userRoute from './routes/UserRoute';
import sessionRoute from './routes/SessionRoute';
import enchereRoute from './routes/EnchereRoute';
// import corsConfig from './src/CorsConfiguration/cors';

import express from "express"
import cors from "cors"



const app = express();
const PORT = process.env.PORT || 8000;

// Cors configuration
app.use(cors())
app.use(express.json());

// Use route
app.use("/api",userRoute);
app.use("/api",sessionRoute);
app.use("/api",enchereRoute);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
