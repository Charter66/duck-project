require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser'); // Add this line
const app = express();
const port = process.env.PORT || 8000;
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandler')
app.use(cors());

app.use(bodyParser.json()); // Add this line to parse JSON request bodies
app.use('/', router);
app.use(express.json());

app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
