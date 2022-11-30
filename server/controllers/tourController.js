import { addTourService, getSingleTourService, getTourService, updateTourService } from "../services/tour.service.js";

export const addTourController = async (req, res, next) => {
    try {
        const result = await addTourService(req.body);
        res.status(200).json({
            message: 'Successfully add new tour',
            data: result
        })
    } catch (error) {
     next(error);   
    }
}

export const getTourController = async (req, res, next) => {
    try {
        // let filters = {...req?.query};
        const queries = {}
        // let queryData = filters?.fields.split(',').join(' ');
        // queries.sortBy = queryData;

        const result = await getTourService(queries);
        res.status(200).json({
            message: 'Successfully get tour data',
            data: result
        })
    } catch (error) {
        next(error); 
    }
}

export const getSingleTourController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getSingleTourService(id);
        res.status(200).json({
            message: 'Successfully find single tour data',
            data: result
        })
    } catch (error) {
        next(error); 
    }
}

export const updateTourController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateTourService(id, req.body);
        res.status(200).json({
            message: "Successfully update data",
            data: result
        })
    } catch (error) {
        next(error);
    }
}