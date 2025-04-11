const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Your proxy route
app.post('/zoho-webhook', async (req, res) => {
  try {
    const { name, phone } = req.body;
    const url = `https://www.zohoapis.in/crm/v7/functions/leadcreationshopify/actions/execute?auth_type=apikey&zapikey=1003.1f099ae6174f2ec18d908f69e7955f76.2c164b6622987d5a4666a8271e2e731d&ln=${encodeURIComponent(name)}}`;

    //const response = await axios.post('https://www.zohoapis.in/crm/v7/functions/createleadincrm/actions/execute?auth_type=apikey&zapikey=1003.07c8503f374f9116af06400203f51266.e5c825a950e4b63ea3c81b59d0dd41cc', req.body);
    const response = await axios.post(url);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
