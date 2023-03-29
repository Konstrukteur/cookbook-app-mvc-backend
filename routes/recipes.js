import { Router } from "express";
import * as recipeController from "../controllers/recipes.js";

const recipeRoutes = Router();

recipeRoutes.get("/", recipeController.index);
recipeRoutes.get("/:id", recipeController.show);
recipeRoutes.post("/", recipeController.create);
// recipeRoutes.get('/edit/:id', recipeController.edit);
recipeRoutes.put("/:id", recipeController.update);
recipeRoutes.delete("/:id", recipeController.destroy);

export default recipeRoutes;
