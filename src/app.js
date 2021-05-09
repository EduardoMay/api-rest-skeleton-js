import express from "express";
import morgan from "morgan";
import cors from "cors";
import ExampleRoutes from "./routes/example";

const app = express();

// setting
app.set("port", process.env.PORT || 3000);

// middleware
app.use(
  cors({
    origin: "http://localhost:3000"
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome API REST" });
});

app.use("/api/v1/example", ExampleRoutes);

export default app;
