import "dotenv/config";
import express from "express";
import cors from "cors";
import connect from "./src/config/databases.js";
import routesCuenta from './src/routes/routesCuenta.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use("/api/cuenta", routesCuenta)

connect().then(() => {
    app.listen(PORT, () => { console.log(`Servidor corriendo en https://localhost:${PORT}`) });
})