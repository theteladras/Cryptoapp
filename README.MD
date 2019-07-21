# Cryptoapp

This project contains rest api's for fetching crypto currencie data by scraping it from the page 'coinmarketcap.com', and it also contains the client side (page) whcih calls this api's to showup the data, based on the current values and the values from the past 30 days.

The current setup pulls data for five crypto currencies: Bitcoin, Etherium, Ripple, Litecoin and OmiseGo.

## Getting Started

To geth the project started, first you have to clone to project.

```
git clone https://github.com/theteladras/Cryptoapp.git
```

Than when it is complete you will have to install modules from both the root of the cloned directory and from the directory _front_:

```
npm i or yarn
```

You will need to install a global package called _concurrently_ (if you want to run both the client side and the server at the same time).

```
npm i -g concurrently or yarn global add concurrently
```

And then from the root of the cloned directory run:

```
npm run dev
```

Otherwise if you still want both of them without the package, you will need to start them manualy by runing in the root of the  cloned directory:

```
npm start
```

...and for the client side, from inside the directory _front_:

```
npm start
```

## API Doc

#### Fetch latest data (of all tracked coins):

```
GET /latest
```

#### Fetch circulating supply rate (for the provided coin):

```
POST /current-supply    body { coin:  BTC || ETH || LTC || XRP || OMG }
```

#### Fetch past 30 days data (for provided coin):

```
POST /get-coin-data    body { coin:  BTC || ETH || LTC || XRP || OMG }
```

#### Fetch the current value and 24h change (for provided coin):

```
POST /current-value    body { coin:  BTC || ETH || LTC || XRP || OMG }
```

#### Fetch week old coin value (for provided coin):

```
POST /current-week-old-value    body { coin:  BTC || ETH || LTC || XRP || OMG }
```
