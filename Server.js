const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/data', (req, res) => {
  const data = {
    message: 'Hello from the backend!',
  };
  res.setHeader('ngrok-skip-browser-warning', 'true');
  res.json(data);
});

const port = 3000; // Set the desired port for your backend server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
