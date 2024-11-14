const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Vocab = require('./api/models/vocabModel');
const routes = require('./api/routes/vocabRoutes');

mongoose.Promise = global.Promise;

// Updated mongoose connection to include proper error handling
mongoose.connect('mongodb://localhost:27017/vocab-builder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => {
    console.error('Could not connect to MongoDB...', err);
    process.exit(1); // Exit process if database connection fails
  });

const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
routes(app);

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
