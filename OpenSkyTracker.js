const express = require("express");
const axios = require("axios");

const PORT = 5005;
const OPENSKY_API_BASE_URL = "https://opensky-network.org/api";

const app = express();

app.use(express.json());

app.get("/states/all", async (req, res) => {
  try {
    const { time, icao24, lamin, lomin, lamax, lomax, extended } = req.query;

    const queryParams = new URLSearchParams({
      time,
      icao24,
      lamin,
      lomin,
      lamax,
      lomax,
      extended,
    });

    const apiUrl = `${OPENSKY_API_BASE_URL}/states/all?${queryParams.toString()}`;

    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from OpenSky API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
