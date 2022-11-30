import mongoose from 'mongoose';

const addTor = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true,
        min: [1, "Can't be lass than 1 day"]
    },
    price_per_participant: {
        type: Number,
        required: true,
        min: [1, "Can't be lass than 1 dollar"]
    },
    group_size: {
        type: Number,
        required: true,
        min: 1
    },
    transportation: {
        type: String,
        required: true,
        enum: {
            values: ['boat', 'bicycle', 'car', 'bus'],
            message: "Transport can'tb be {VALUE}"
        }
    },
    description: {
        type: String,
        required: true,
        minLength: [10, "must be 10 character or more"]
    }
}, {
    timestamps: true
});

const tourModel = mongoose.model('Tour', addTor);

export default tourModel;