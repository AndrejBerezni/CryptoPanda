# CRYPTO PANDA

![Top Coins Page Desktop](/public/screenshots/topcoinspage-desktop-dark.jpeg)

## Table of contents

1. [Overview](#overview)
2. [Stack](#stack)
3. [Features](#features)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Pages](#pages)

## Overview

Crypto Panda is a cryptocurrency tracking application built with React and Typescript. It provides real-time data on cryptocurrencies using the free tier of Coingecko API.

## Stack

- React
- Typescript - ensures type safety and improved code quality
- Tailwind CSS - used to build responsive UI, with different color themes (dark/light)
- Vite - build tool that provides faster and leaner development experience
- React Router - enables navigation between pages within the application
- React Context API - managing global state
- Coingecko API - provides real-time data on cryptocurrencies
- Chart.js and react-chartjs-2 - help build responsive charts to display historical cryptocurrency price

## Features

- View list of top 50 cryptocurrencies (by market cap or by volume) and their information: current price, market cap, volume, and price change percentage in the last 24h.
- Regular price update without refreshing the page - prices are automatically updated every 2 minutes.
- Search for cryptocurrencies by their name or symbol.
- Track certain cryptocurrencies by adding them to Favorites list - list is saved in localStorage, so that your list remains saved between sessions
- Change fiat currency - select whether you would like to view cryptocurrency prices in Euros, United States Dollars, British Pounds, or Russian Rubles.
- Individual cryptocurrency pages with responsive line chart - every cryptocurrency card on Top Coins, Explore, or Favorites pages has a link to a page dedicated to that cryptocurrency where user can view historical price for the last 90 days, displayed in responsive line chart.
- Color schemes - supports both light and dark themes, adjusted automatically based on the user's browser preference
- Pagination - cryptocurrency lists have pagination, for easier navigation and list readability, displaying maximum of 10 results per page

## Installation

1. Clone the repository: `https://github.com/AndrejBerezni/CryptoPanda.git`
2. Navigate to the project directory: `cd CryptoPanda`
3. Create a `.env` file in the root of the project directory.
4. Obtain a free API key from [Coingecko](https://www.coingecko.com/en/api/pricing) - Create Demo Account
5. In the `.env` file, add the following two lines, replacing `YOUR_API_KEY` with the API key obtained from Coingecko:

```
VITE_COINGECKO_API_KEY=YOUR_API_KEY
VITE_COINGECKO_BASE_URL=https://api.coingecko.com/api/v3/
```

6. Install dependencies: `npm install`

## Usage

1. Start the development server: `npm run dev`
2. If application does not start automatically, open your browser and navigate to `http://localhost:5137`

## Pages

### Top Coins

![Top Coins Page Desktop](/public/screenshots/topcoinspage-desktop-light.jpeg)
![Top Coins Page Mobile](/public/screenshots/topcoinspage-mobile-dark.jpeg)

### Explore

![Explore Page Desktop](/public/screenshots/explorepage-desktop-light.jpeg)
![Explore Page Mobile](/public/screenshots/explorepage-mobile-dark.jpeg)

### Favorites

![Favorites Page Desktop](/public/screenshots/favoritespage-desktop-dark.jpeg)

### Coin

![Coin Page Desktop](/public/screenshots/coinpage-desktop-dark.jpeg)
![Coin Page Mobile](/public/screenshots/coinpage-mobile-light.jpeg)

Thank you for taking the time to explore Crypto Panda! If you have any questions, suggestions, or feedback, please don't hesitate to contact me at [berezniandrej@gmailcom](mailto:berezniandrej@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/andrej-berezni).
