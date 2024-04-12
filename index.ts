// App.ts
// nps tsx index.ts {startup command}
import userRoute from './src/routes/UserRoute';
import sessionRoute from './src/routes/SessionRoute';
import enchereRoute from './src/routes/EnchereRoute';
import corsConfig from './src/CorsConfiguration/cors';

import express from "express"
import cors from "cors"



const app = express();
const PORT = process.env.PORT || 3000;

// Cors configuration
app.use(cors(corsConfig))
app.use(express.json());

// Use route
app.use("/api"+userRoute);
app.use("/api"+sessionRoute);
app.use("/api"+enchereRoute);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
