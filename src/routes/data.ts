import express from "express";
import Data from '../models/Data';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching feedbacks: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;