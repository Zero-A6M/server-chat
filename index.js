const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const settings = require('./settings.json');
const router = require('./router');
const Api_db = require('./DB_API/DataBase');
const _user = require('./user');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const DB = new Api_db(20);

app.use(express.static("./static"));
app.use(router);

const PORT = process.env.PORT || settings.server.PORT;



io.on('connection', (client) => {
    console.log(`Client join, ID --> ${client.id}`);

    client.on('joinUser', ({name, room}, callback) => {
        console.log(`Client join ${name}, ID --> ${client.id}`);
        let {error, user} = DB.AddUser(new _user(name, room, client.id));

        if (error) {
            return console.log(error);
            //return callback(error);
        }
        let time = new Date().toLocaleTimeString('ru-RU', {hour : "2-digit", minute : "2-digit"});
        client.emit('messageInfo', {username: null, message:`${user.name} добро пожаловать в чат. | ${time}`, time});
        client.broadcast.to(user.room).emit('messageInfo', {username: null, message:`Пользователь ${user.name} подключился(-лась) к чату. | ${time}`, time});

        client.join(user.room);

        //callback();
    });

    client.on('sendMessage', (message, callback) => {
        let user = DB.GetUser(client.id);
        let time = new Date().toLocaleTimeString('ru-RU', {hour : "2-digit", minute : "2-digit"});
        io.to(user.room).emit('message', {username: user.name, message: message, time});
        callback();
    });

    client.on('disconnect', () => {
        let {user} = DB.RemoveUser(client.id);
        if (user != undefined)
            console.log(`Client ${user.name}, ID --> ${client.id} leave`);
    });
})



server.listen(PORT, () => {
    console.log(`Server start --> http://localhost:${PORT}`);
});