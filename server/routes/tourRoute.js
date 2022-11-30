import express from 'express';
import { addTourController, getSingleTourController, getTourController, updateTourController } from '../controllers/tourController.js';

const tourRouter = express.Router();

tourRouter.route('/')
.get(getTourController)
.post(addTourController)

tourRouter.route('/:id')
.get(getSingleTourController)
.patch(updateTourController)

export default tourRouter;