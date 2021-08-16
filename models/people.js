const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
    name:{type: String, required: true},
    height:{type: String, required: true},
    mass:{type: String, required: true},
    hair_color:{type: String, required: true},
    skin_color:{type: String, required: true},
    eye_color:{type: String, required: true},
    birth_year:{type: String, required: true},
    gender:{type: String, required: true}
});

module.exports = mongoose.model("people", PeopleSchema);