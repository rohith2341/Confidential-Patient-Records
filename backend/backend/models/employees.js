const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    personalDetails: {
        fullName: {
            type: String,
            maxlength: [30, 'Patient name cannot exceed more than 30 Characters']
        },
        dob: {
            type: Date,
        },
        sex: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
        },
        bloodGroup: {
            type: String,
        },
        phoneNumber: {
            type: Number,
            maxlength: [10, 'Mobile Number cannot exceed 10 digits']
        },
        alternateNumber: {
            type: Number,
        },
        insuranceCarrier: {
            type: String,
        },
        policyNumber: {
            type: String,
        },
        pastConditions: {
            type: String
        },
        surgeries: {
            type: String
        }
    },
    medications: {
        name: {
            type: String,
        },
        dosage: {
            type: String,
        },
        frequency: {
            type: String,
        },
        physician: {
            type: String,
        }
    },


    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Employees", employeeSchema);
