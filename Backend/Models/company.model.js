import mongoose from "mongoose";

const companyShema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    logo: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

})

export const Company = mongoose.model("Company", companyShema);