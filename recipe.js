class User {
  static db = [];
  static id = 1;

  constructor(name) {
    this.name = name;
  }

  upload(food, ing, recipe) {
    const rec = {
      id: User.id++,
      creater: this.name,
      dish: food,
      ingredients: ing,
      recipe: recipe,
    };
    User.db.push(rec);
    return rec.id;
  }

  viewDish() {
    User.db.forEach((item) => console.log(item.dish));
  }

  viewAllRecipes() {
    User.db.forEach((item) => {
      console.log(`Dish: ${item.dish}`);
      console.log(`Ingredients: ${item.ingredients}`);
      console.log(`Recipe: ${item.recipe}`);
      console.log(`By: ${item.creater}`);
      console.log("---");
    });
  }

  viewRecipeByDish(dishName) {
    const found = User.db.find(
      (item) => item.dish.toLowerCase() === dishName.toLowerCase()
    );

    if (found) {
      console.log(`Dish: ${found.dish}`);
      console.log(`Ingredients: ${found.ingredients}`);
      console.log(`Recipe: ${found.recipe}`);
      console.log(`By: ${found.creater}`);
    } else {
      console.log(`No recipe found for dish: ${dishName}`);
    }
  }

  updateRecipe(dishName, newIng, newRecipe) {
    const rec = User.db.find(
      (item) =>
        item.dish.toLowerCase() === dishName.toLowerCase() &&
        item.creater === this.name
    );

    if (rec) {
      rec.ingredients = newIng;
      rec.recipe = newRecipe;
      console.log(`${dishName} updated successfully by ${this.name}`);
    } else {
      console.log(`You cannot update this recipe.`);
    }
  }

  deleteRecipe(dishName) {
    const index = User.db.findIndex(
      (item) =>
        item.dish.toLowerCase() === dishName.toLowerCase() &&
        item.creater === this.name
    );

    if (index !== -1) {
      User.db.splice(index, 1);
      console.log(`${dishName} deleted by ${this.name}`);
    } else {
      console.log(` You cannot delete this recipe.`);
    }
  }
}

let u1 = new User("Ram");
u1.upload(
  "Rice",
  "rice and water",
  "wash the rice twice and soak it with water for 20 mins. After soaking it, keep it in high flame for 3 whistles and switch it off"
);
u1.upload(
  "Tea",
  "Ginger, Tea powder, milk, sugar, cardamom",
  "Heat the milk. Add the tea powder, cardamom and ginger and let it boil. Add required sugar and strain it and serve it"
);

// u1.viewDish();

// u1.viewAllRecipes();

let u2 = new User("Sam");
u2.viewDish();

u2.updateRecipe(
  "Rice",
  "Rice,Water",
  "wash the rice twice and soak it with water for 20 mins. After soaking it, keep it in high flame for 3 whistles and switch it off"
);

u2.viewRecipeByDish("Tea");
