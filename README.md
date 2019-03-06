# Scuba Database

## Built with React, Node, MongoDb and SCSS

### Scuba dive database side project. 

To Do: 
- Finish Dive Site list page (cards with images) and Dive site individual page
- Mapbox and MapBox Geocoding for Scuba Map (https://docs.mapbox.com/help/tutorials/tilequery-healthy-food-finder/)
- Lots of styling

npm install

Create config folder with db.js
```
module.exports = {
    url  : 'YOUR_MLAB_KEY'
}
```

Create file in root called .env to store dev environment variables.
```
MAPBOX_TOKEN=<YOUR_ACCESS_TOKEN>
```

Run the express server
```
nodemon server/app
```

Run React
```
npm run start
```

Voila

<!-- API endpoints -->