# Scuba Database

## Built with React, Node, MongoDb and SCSS

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

Create file in config called mapbox.js
```
module.exports = {
    access_token : 'YOUR_MAPBOX_KEY'
}
```

Run the express server
nodemon server/app

Run React
npm run start

voila.

<!-- API endpoints -->