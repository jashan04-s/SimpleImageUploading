import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

const connectionString = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get("/api", (req, res) => {
    res.send({ message: "Hello from Express!" });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));