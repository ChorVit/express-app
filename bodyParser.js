const bodyParserPackege = require("body-parser");

function bodyParsering(app){
    app.use(bodyParserPackege.urlencoded({ extended: false }))
    app.use(bodyParserPackege.json())
}
module.exports = bodyParsering;

