// App.ts
// nps tsx index.ts {startup command}
import deviseRoute from './src/routes/DeviseRoute';
import coursDeChangeRoute from './src/routes/CoursDeChangeRoute';
import registrationRoutes from './src/routes/registrationRoute';
import corsConfig from './src/CorsConfiguration/cors';
import express from "express"
import cors from "cors"



const app = express();
const PORT = process.env.PORT || 3000;

// Cors configuration
app.use(cors(corsConfig))
app.use(express.json());

// Use route
app.use(deviseRoute);
app.use(coursDeChangeRoute);
app.use('/api/users', registrationRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
