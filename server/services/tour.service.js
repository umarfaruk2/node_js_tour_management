import tourModel from "../models/tourSchema.js"

export const addTourService = async (data) => {
    const addTour = new tourModel(data);
    await addTour.save();
    return addTour;
}

export const getTourService = async (data) => {
    const getTour = await tourModel.find({}).select().sort(data.sortBy);
    return getTour;
}

export const getSingleTourService = async (data) => {
    const getTour = await tourModel.findById(data);
    return getTour;
}

export const updateTourService = async (id, data) => {
    const updateData = await tourModel.findByIdAndUpdate({_id: id}, {
        $set: data
    }, {new: true} );
    return updateData;
}