require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(bodyParser.json());
app.use('/', router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
