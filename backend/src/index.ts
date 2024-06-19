import express from "express";
import cors from "cors";
import exampleRoute from "./routes/exampleRoute";
import dotenv from "dotenv";
import videoRoute from "./routes/videoRoute";
import envRoute from "./routes/envRoute";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api", exampleRoute);
app.use("/", envRoute);
app.use("/", videoRoute);

app.get("/", (req, res) => {
  res.send("Hello from the Backend!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
