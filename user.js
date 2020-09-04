class User {
    constructor(name, room, id) {
        this.name = name;
        this.room = room;
        this.id = id;
        this.token = null;
    }
}

module.exports = User;