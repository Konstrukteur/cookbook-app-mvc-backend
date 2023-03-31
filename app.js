import express from "express";
import cors from "cors";
import path from "path";

import recipeRoutes from "./routes/recipes.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use("/", express.static(path.join(path.resolve(), "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/recipes/", recipeRoutes);

app.listen(PORT, () => {
  console.log(
    `\nserver listening on port ${PORT}\nPress CTRL + C to stop the server`
  );
});
