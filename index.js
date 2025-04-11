const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Your proxy route
app.post('/zoho-webhook', async (req, res) => {
  try {
    const response = await axios.post('https://www.zohoapis.in/crm/v7/functions/createleadincrm/actions/execute?auth_type=apikey&zapikey=1003.07c8503f374f9116af06400203f51266.e5c825a950e4b63ea3c81b59d0dd41cc', req.body);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
