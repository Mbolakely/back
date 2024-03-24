const express = require('express');     
const cors = require('cors');
import VenteRoutes from './routes/VenteRoutes';

const app = express();
app.use(cors());
  
app.use(express.json());

app.use('/api', VenteRoutes);

export default app;
