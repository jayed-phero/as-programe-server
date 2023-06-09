const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            validate: [validator.isEmail, "Provide a valid Email"],
            trim: true,
            lowercase: true,
            unique: true,
            required: [true, "Email address is required"]
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            validate: {
                validator: (value) =>
                    validator.isStronePassword(value, {
                        minLength: 6,
                        minLowercase: 3,
                        minNUmber: 1,
                        minUppercase: 1,
                        minSymbols: 1
                    }),
                message: "Password {VALUE}  is not strong enough."
            }
        },
        role: {
            type: String,
            enum: ["buyer", "store-manager", "admin"],
            default: "buyer"
        },
        confirmationToken: String,
        confirmationTokenExpires: Date,

        passwordChangedAt: Date,
        passwordRestToken: String,
        passwordResetExpires: Date
    },
    {
        timestamps: true
    }
)



userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt.compareSync(password, hash)
    return isPasswordValid;
}

userSchema.methods.generateConfirmationToken = function () {
    const token = crypto.randomBytes(32).toString("hex");

    this.confirmationToken = token;
    const date = new Date();

    date.setDate(date.getDate() + 1);
    this.confirmationTokenExpires = date;

    return token;
}

const User = mongoose.model("User", userSchema);
module.exports = User;