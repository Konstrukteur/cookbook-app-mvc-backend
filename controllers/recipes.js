import pool from "../config/database.js";
import * as recipeModel from "../models/recipe.js";

const index = async (request, response, next) => {
  const sql = `SELECT * FROM recipes ORDER BY id ASC`;
  const { rows: recipes } = await pool.query(sql);

  response.json(recipes);
};

const show = async (request, response, next) => {
  const sql = `SELECT * FROM recipes WHERE id = $1`;
  const { id } = request.params;
  const {
    rows: [recipe],
  } = await pool.query(sql, [id]);

  response.json(recipe);
};

// const create = async (request, response, next) => {
//   const sql = `INSERT INTO recipes (title, description, instructions, information, imagepath, ingredients, categories) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

//   const {
//     title,
//     description,
//     instructions,
//     information,
//     imagepath,
//     ingredients,
//     categories,
//   } = request.body;

//   if (
//     !title ||
//     !description ||
//     !instructions ||
//     !information ||
//     !imagepath ||
//     !ingredients ||
//     !categories
//   )
//     return response.json({ error: "Missing data" });

//   const { rows: recipe } = await pool.query(sql, [
//     title,
//     description,
//     instructions,
//     information,
//     imagepath,
//     ingredients,
//     categories,
//   ]);

//   response.status(201).json(recipe);
// };

const create = async (request, response, next) => {
  const RECIPE = request.body;

  if (!RECIPE) {
    return response.status(400).json({ error: "Missing data" });
  }

  const sql = `INSERT INTO recipes (${Object.keys(RECIPE).join(
    ", "
  )}) VALUES (${Object.values(RECIPE)
    .map((value) => `'${value}'`)
    .join(", ")}) RETURNING *`;

  try {
    const { rows: recipe } = await pool.query(sql);
    response.status(201).json(recipe[0]);
  } catch (error) {
    return response.status(500).json({ error: "Failed to create recipe" });
  }
};

const update = async (request, response, next) => {
  const sql = `UPDATE recipes SET price = $1, date = $2, user_id = $3 WHERE id = $4 RETURNING *`;
  const { id } = request.params;
  const { price, date, user_id } = request.body;

  if (!price || !date || !user_id || !id)
    return response.json({ error: "Missing data" });

  const { rows: recipe } = await pool.query(sql, [price, date, user_id, id]);

  response.json(recipe);
};

const destroy = async (request, response, next) => {
  const sql = `DELETE FROM recipes WHERE id = $1`;
  const { id } = request.params;
  const { rows: recipe } = await pool.query(sql, [id]);

  response.json(recipe);
};

export { index, show, create, update, destroy };
