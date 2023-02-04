const { uniqueNamesGenerator, adjectives, starWars, animals} = require('unique-names-generator'); 

module.exports = {
    createNewEmail() {
        const num = Math.floor(Math.random() * 1000);
        const fullname = uniqueNamesGenerator({
            dictionareis : [adjectives,animals],
            style: 'lowerCase'
        });
        return `test-${fullname}${num}@gmail.com`;
    },
    createNewName() {
        const num = Math.floor(Math.random() * 1000);
        const fullname = uniqueNamesGenerator({
            dictionareis : [starWars],
            style: 'capital'
        });

        return `${fullname}${num}` ;
    }
}