import MealServices from '../services/meal.services';


const mealController = {

    fetchAllMeals(req, res) {
        const allMeals = MealServices.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },

    addAMeal(req, res) {
        /*
            Expect json the format
            {
                name: "some food",
                size: "large",
                prize: "450"
            }

        */
       const newMeal = req.body;
       const createdMeal = MealServices.addMeal(newMeal);
       return res.json({
         status: 'success',
         data: createdMeal
      }).status(201);
    },

    getSingleMeal(req, res) {
        const id = req.params.id;
        const foundMeal = MealServices.getAMeal(id);
        return res.json({
            status: 'success',
            data: foundMeal
         }).status(201);
    }
}

export default mealController;