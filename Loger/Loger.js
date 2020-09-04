class Loger {
    constructor(nameFile) {
        this.nameFile = nameFile;
    }

    Log(msg) {
        if (typeof msg === "string")
            console.log(`${this.nameFile} | message --> ${msg}`);
        else 
        console.log(`${this.nameFile} | message -->`, msg);
    }
}

module.exports = Loger;