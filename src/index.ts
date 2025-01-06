import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./db";
import dataRoutes from "./routes/data";

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', dataRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})