import express from "express";
import logRoutes from "./src/companyLogs/routes.js";

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.use('/api/logs',logRoutes);

app.listen(port,()=>{
    console.log(` App Listening on Port ${port} `);
});