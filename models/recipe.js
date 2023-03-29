const showRecipe = () => {
  const data = "data was fetched";
  return data;
};

const createRecipe = (data) => {
  const recipe = request.body;
  return { ...recipe };
};

const editRecipe = (editData) => {
  const data = "Data is edited by id: " + editData;
  return data;
};

const updateRecipe = (updateId) => {
  const data = "Data was updated by id: " + updateId;
  return data;
};

const destroyRecipe = (deleteId) => {
  const data = "Data was deleted by id: " + deleteId;
  return data;
};

export { showRecipe, createRecipe, editRecipe, updateRecipe, destroyRecipe };
