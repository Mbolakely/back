// App.ts
const express = require('express');
import deviseRoute from './routes/DeviseRoute';
import coursDeChangeRoute from './routes/CoursDeChangeRoute';
import authentificationRoute from './routes/RegistrationRoute';

const app = express();


app.use(express.json());

// Utiliser les routes pour l'authentification
app.use(authentificationRoute);


// Utiliser les routes pour les devises
app.use(deviseRoute);

// Utiliser les routes pour les cours de change
app.use(coursDeChangeRoute);



