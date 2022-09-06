# recipe-world

## Description

If you are looking for something new with your meal, the best choice is the recipe world. You can find hundreds and thousands of recipes here, with easy tutorials. Rate the recipe and leave a comment on it. You could also share your recipes.

## Important Links

- [Deployed API Server](https://warm-bayou-37175.herokuapp.com)
- [Deployed Frontend](https://recipe-world-app.netlify.app)
- [Trello Board](https://trello.com/invite/b/WHOxshME/b573f01527cd641c23d23ea20e53df29/fspp-project)
- [ERD](https://miro.com/app/board/uXjVPZ3W7UU=/?share_link_id=634173605740)
- [Wireframes](https://wireframe.cc/WRnIoR)

## Local Setup

### Frontend Setup

```bash
# clone the repository to your local machine.
git clone git@github.com:JuHaoChen1997/recipe-world.git

# navigate to the front-end directory
cd recipe-world/front-end

# create the .env file (make sure you are on the same level as the package.json of the frontend-end directory)
touch .env

#inside the .env file enter these data and save (you need to register a email.js account and imgur account)
# https://www.emailjs.com/
# https://imgur.com/
REACT_APP_API_URL=http://localhost:3333
REACT_APP_YOUR_SERVICE_ID=email.js_service_id
REACT_APP_YOUR_TEMPLATE_ID=email.js_template_id
REACT_APP_YOUR_PUBLIC_KEY=email.js_public_key
REACT_APP_IMGUR_API_KEY=imgur_api_key

# install the required node modules
npm i


# start the server
npm start
```

### Backend Setup

```bash
# clone the repository to your local machine.
git clone git@github.com:JuHaoChen1997/recipe-world.git

# navigate to the back-end directory
cd recipe-world/back-end

# create the .env file (make sure you are on the same level as the package.json of the back-end directory)
touch .env

#inside the .env file enter these data and save

PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=recipe_world

# install the required node modules
npm i

# initialize and seed the database
npm run db:init
npm run db:seed

# start the server
nodemon server.js
```
