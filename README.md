# ACE Marketplace 

### Description
This is a application written in javascript using the react framework for a node server by the OJT team for training purposes.

It is s marketplace application for a personal second-hand store.

On the landing page the project includes a carousel of products above ***cards*** sections showing different categories of products and a footer section with social media icons.

There is a  navbar with links to other areas, a search feature, and a login.

### Contributors

Andre Larson `https://github.com/drelarson`
Corina Ek `https://github.com/ekcorina`
Easy Mahaffey `https://github.com/easymahaffey`
Shandea Hardin `https://github.com/Shandea`

### Technologies used

#### Front End:

The ACE Marketplace app's UI was made using ***React*** components, Redux for state management, Axios to manage calls to the backend. It also uses scss for CSS with a mobile first approach to create an interface that is dynamically responsive to different view screen sizes. 

The front end also uses Axios as an API for calls to the backend. 


#### Back End:

The back end uses an object, model, view (OMV) architecture and was built with Node.js using an Express server, and a local Mongodb database. The server uses helmet.js for an added layer of security, passport.js for authentication and mongoose to interact with the database.

The server was kept intentionally clean, the database, routes and express-session/passport were built out in separate modules and brought into the server. Express-session takes in express defined as ***app*** as a dependency. Cors is also used to handle communication with the front-end. Here is the server:

```javascript

    const express = require("express")
    const app = express()
    const cors = require("cors")
    const helmet = require("helmet")
    const session = require("../backend/auth/connectSession")
    const routes = require("../backend/routes")
    const PORT = process.env.PORT || 8080

    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(cors())
    app.use(helmet())

    session(app)
    app.use(routes)
    // For photo uploads
    // app.use('/api/attachment', require('./routes/api/attachment'))
    require("../backend/db/dbConnect")

    app.listen(PORT, ()=>console.log(`Backend App listens on port.... ${PORT}`))

    module.exports = app;

``` 
***Mongoose*** connects the server with the database in its own module. This can be found in dbConnect.js:

```javascript

    let dotenv = '../../server/node_modules/dotenv';

    if (process.env.NODE_ENV !== "production") {
    require(dotenv).config()
    }

    let mongoose = '../../server/node_modules/mongoose'
    mongoose = require(mongoose)

    const MONGO_URI = process.env.MONGO_URI

    mongoose.connect(MONGO_URI, console.log("The mongoose is on the loose!"))

```

Similarly, ***Express-session*** is set to its own module which also sets the ***Passport*** middleware to the server. The ***passport-local*** strategy is brought into the express-session module as a dependency that takes in Passport. The code fpr local strategy comes from the passport documentation. Note the paths are setup for a separate ***backend*** directory.

From connectSession.js

```javascript

    let dotenv = '../../server/node_modules/dotenv';
    let express_session = '../../server/node_modules/express-session';
    let express_passport = '../../server/node_modules/passport'

    if (process.env.NODE_ENV !== "production") {
        require(dotenv).config()
    }

    const session = require(express_session)
    const passport = require(express_passport)

    module.exports = function (app) {
        app.use(
            session({
                secret: process.env.SESSION_SECRET,
                resave: true,
                saveUninitialized: true,
                cookie: { secure: false },
                key: 'express.sid',
            })
        );
        app.use(passport.initialize());
        app.use(passport.session());
        require("./connectPassport")(passport)
}

```

Passport is setup with connectSession.js is the same auth directory as connectPassport.js: 

```javascript

    const LocalStrategy = require("../../server/node_modules/passport-local");
    const bcrypt = require("../../server/node_modules/bcryptjs");
    const User = require("../db/models/User")

    module.exports = function(passport){
        passport.serializeUser((user, done) => {
            done(null, user.id);
        });
        
        passport.deserializeUser((id, done) => {
            User.findById(id, (err, doc) => {
            done(null, doc);
            });
        });
        
        passport.use(
            new LocalStrategy({ usernameField : 'email'}, function (email, password, done) {
            User.findOne({ email }, function (err, user) {
                if (err) {
                return done(err);
                }
                if (!user) {
                return done(null, false);
                }
                if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false);
                }
                return done(null, user);
            });
            })
        ); 
    }

```

The routes used to access the application controller function calls from the Axios API on the frontend are in appRoutes.js.
The thought process for leaving the delete user in the app route is bacuse it is not part of authorization.

```javascript

let express = '../../server/node_modules/express'
const router = require(express).Router()
const controller = require("../controllers")

router.route("/").post(controller.getItems)
router.route("/add_item").post(controller.addItem)
router.route("/delete_item").post(controller.deleteItem)
router.route("/update_item").post(controller.updateItem)
router.route("/deleteuser").post(controller.deleteUser)

module.exports = router

```

This is an excerpt from appFunction.js that shows how to delete items from the user's shopping cart.:

```javascript

    module.exports = {
    deleteItem: function (req, res) {
        let { _id } = req.body
        Item.findByIdAndDelete({ _id }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                User.findByIdAndUpdate({ _id: data.userId }, { $pull: { items: data._id } }, { new: true }).populate({path:'items', options:{sort:{'itemName':1}}}).exec((err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json(data.items)
                    }
                })
            }
        })
    },
    getItems: function(req, res){
        let { _id } = req.body
        User.findById({_id}).populate({path:'items', options:{sort:{'itemName':1}}}).exec((err, data)=>{
            if(err){
                console.log(err)
            } else {
                res.json(data.items)
            }
        })
    }
}

```

### Testing

Testing was done using ***Mocha chai*** assertion testing (tdd) with ***chai-http***. The testing script was changed in the package.json to run tests with Mocha chai assertions, e.g.,

```json
    "scripts": {
    "test": "mocha --timeout 10000 --u tdd",
    }

```

#### Start scripts etc.

To start the back-end and the front-end at the same time, the dev dependency ***concurrently*** was used. ***Concurrently*** starts two scripts at the same time - in this case starting the server with ***nodemon*** and the client:

```json

    "scripts": {
    "server": "nodemon server.js",
    "start": "node server.js",
    "client": "npm start --prefix ../client",
    "dev": "concurrently \"npm  run server\" \"npm run client\" "
  }

```

***Nodemon*** was used to start the development server so that it restarts its self when a change is made. ***Dotenv*** is an additional dev dependency that makes the process.env object available and hide variables from the front end.

## Admin Notes

### Mongo Tips
***Using PowerShell...***

***Useful MONGO Commands***

> show dbs

> use `database_name`

> db.dropDatabase() 
`After *use* to access database`

> show collections

> db.`collection_name`.find()

> db.`collection_name`.find().pretty()


> db.`collection_name`.drop()

### Git / GitHub Tips
***Using VS terminal...***

***Useful 'git' Commands***

*** **Initial repo build** ***

> `git init`

> `git remote add origin https://github.com/name/repoName.git` (example)

> `git config --global user.email "email@email.com"` ( first time setup) 

> `git config --global user.name "Your Name"` (first-time setup) 

> `git branch -M main` or master as default initial branch (press enter)

> `git add .` (press enter) (maintain the space before the dot)

> `git commit -m "first commit"` (press enter)

> `git push origin main` (press enter)

*** **Update/Branch repo build** ***

> `git init` 

> `git branch -M dev` main, master or dev
>
> Connects to the main, master or dev as necessary branch


> `git checkout -b branch-name` 
> 
> Check out the branch you want to work on. 

** **After you finish your new work push it up by commiting it.** **

> `git add .`

> `git commit -m “commit message "`

> `git push origin branch-name`


### WHAT WE HAVE LEARNED WITH THIS PROJECT

How to do model, view, controller (MVC) programming as a team. 

We also have learned how to use git, github, and jira. 