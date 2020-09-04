let Loger = require('../Loger/Loger');
loger = new Loger("DataBase");

class DataBase {
    constructor(lenght) {
        this.users = [];
        this.maxConnect = lenght || 20;
        this.сonnections = 0;
    }

    Find(fn) {
        let result = this.users.find(fn);
        return result;
    }

    FindIndex(fn) {
        let index = this.users.findIndex(fn);

        return index;
    }

    AddUser(user) {
        if (this.сonnections >= this.maxConnect) {
            return {error:{
                message: `The network is full`,
                type: 'Error DB',
                code: 2
            }};
        }

        let _ = this.Find((item) => {
            if (user.name === item.name) return true;
        });

        if (_) {
            return {error: {message: `Username ${user.name} is used`, type: 'Error DB', code: 1}};
        }

        this.сonnections = this.users.push(user);

        return {user};
    }

    RemoveUser(id) {
        let index = this.FindIndex((user) => {
            if (user.id == id) return true;
        });

        if (index == -1) {
            return {error:{
                message: `User is not found | id --> ${id}`,
                type: 'Error DB',
                code: 3
            }};
        }

        let user = this.users.splice(index, 1)[0];
        this.сonnections = this.users.length;

        return {user};
    }

    GetUser(id) {
        return this.Find((user) => user.id === id ? true: false);
    }
}
//1:10:38
module.exports = DataBase;