const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

const STEAM_API_KEY = 'D3A800286B10ACE119F653291838E7E0';
const STEAM_ID = '76561199062026215';

app.get('/api/steam/playersummaries', async (req, res) => {
  const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${STEAM_API_KEY}&steamids=${STEAM_ID}`;
  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

app.get('/api/steam/recentlyplayedgames', async (req, res) => {
    const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&count=3`;
    try {
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});