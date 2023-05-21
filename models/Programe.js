const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const programeSchema = mongoose.Schema(
    {
        institutionType: {
            type: String,
            required: [true, "Institution Type is required"]
        },
        programePlace: {
            type: String
        },
        participantType: {
            type: String,
        },
        fimaleCondition: {
            type: String
            //maxLength: [100, "Name is to large"]
        },
        designation: {
            type: String,
        },
        district: {
            type: String
        },
        subDistrict: {
            type: String
        },
        applicante_mobile: {
            type: Number,
            unique: true
        },
        applicante_name: {
            type: String
        },
        details_address: {
            type: String
        },
        goals_of_halaka: {
            type: String
        },
        manage_cost_source: {
            type: String
        },
        masjid_quality: {
            type: String
        },
        refarence: {
            type: String
        },
        madrashaw_name: {
            type: String
        },
        programme_place_description: {
            type: String
        },
        people_container_ability: {
            type: Number
        },
        volunteer_number: {
            type: Number
        },
        present_students_number: {
            type: Number
        },
        confirmationToken: String
    },
    {
        timestamps: true
    }
)



programeSchema.methods.generateConfirmationToken = function () {
    const token = crypto.randomBytes(32).toString("hex");

    this.confirmationToken = token;
    const date = new Date();

    date.setDate(date.getDate() + 1);
    this.confirmationTokenExpires = date;

    return token;
}

const Programe = mongoose.model("Programe", programeSchema);
module.exports = Programe;