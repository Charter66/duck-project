require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const duckRouter = require('./routes/duckRoutes');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(bodyParser.json());
app.use('/ducks', duckRouter);
app.use('/users', userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
