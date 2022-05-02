var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const corsOpts = { origin: '*', methods: ['GET', 'POST'], allowedHeaders: ['Content-Type']};
app.use(cors(corsOpts));

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


const usersRouter = require('./routes/usersRoutes')
const spotsRouter = require('./routes/spotsRoutes')
const userMessagesGroups = require('./routes/userMessageGroupsRoutes')
const groups = require('./routes/groupsRoutes')
const messages = require('./routes/messagesRoutes')
const userMessages = require('./routes/userMessagesRoutes')





app.use('/api/users', usersRouter);
app.use('/api/spots', spotsRouter);
app.use('/api/userMessagesGroups', userMessagesGroups);
app.use('/api/groups', groups)
app.use('/api/messages', messages)
app.use('/api/userMessages', userMessages)



module.exports = app;

/**
 *
 * Cmd:
 * git push heroku main
 * heroku dyno:restart
 * heroku logs --tail
 *
 * */


// const users = require('./routes/user')

// app.get('/api/users', users.getUsers)
// app.get('/api/users/login', users.getLoginAuthentication)
// app.post('/api/users', users.createUser)
// app.put('/api/users/:id(\\d+)', users.updateUser)
// app.get('/api/users/:id(\\d+)', users.getUserById)
// app.delete('/api/users/:id(\\d+)', users.deleteUser)

// const spots = require('./routes/spot')
//
// app.get('/api/spots', spots.getSpots)
// app.get('/api/spots/lat/:lat/long/:long/dist/:dist', spots.getSpotsArea)
// app.get('/api/spots/:id(\\d+)', spots.getSpotById)
// app.post('/api/spots(\\d+)', spots.createSpot)
// app.put('/api/spots/:id(\\d+)', spots.updateSpot)
// app.delete('/api/spots/:id(\\d+)', spots.deleteSpot)