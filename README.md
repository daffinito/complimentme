# Insult me api

https://insultmeapi.herokuapp.com/

This is just a simple node api that returns a random insult. There is a front end angular app to display the insult. 

Uses watchify, here is how to install it:

```
npm i watchify -g
```

Please see https://github.com/substack/watchify for more information on watchify

Then you can start the api with

```
npm run start:dev
```

and visit http://localhost:3000

It is set up for the new relic agent, simply use the following Env Variables:

```
NEW_RELIC_APP_NAME="name"
NEW_RELIC_LICENSE_KEY="key"
NEW_RELIC_NO_CONFIG_FILE="true"
```

