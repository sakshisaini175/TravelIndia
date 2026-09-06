import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./src/config/db.js";
import router from "./src/routes/product.route.js";
import authRouter from "./src/routes/auth.routes.js";
import adminRouter from "./src/routes/admin.js";
import { createRequire } from 'module';


// const require = createRequire(import.meta.url);
import bookingRouter from './src/routes/booking.routes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working...");
});

app.use("/api", router);
app.use("/auth", authRouter);
app.use("/api/booking", bookingRouter);
app.use("/api",adminRouter)


const port = process.env.PORT || 8080;

connectDb();

app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});