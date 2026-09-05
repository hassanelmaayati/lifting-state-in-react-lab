import BurgerStack from "./components/BurgerStack/BurgerStack.jsx";
import { useState } from "react";
import "./App.css";
import IngredientList from "./components/IngredientList/IngredientList.jsx";

const App = () => {
  const availableIngredients = [
    { id: 1, name: "Brioche Bun", color: "#D4A373" },
    { id: 2, name: "Sesame Bun", color: "#F5DEB3" },
    { id: 3, name: "Whole Wheat Bun", color: "#8B7355" },

    // Proteins
    { id: 4, name: "Beef Patty", color: "#8B4513" },
    { id: 5, name: "Chicken Patty", color: "#F5DEB3" },
    { id: 6, name: "Veggie Patty", color: "#556B2F" },
    { id: 7, name: "Bacon", color: "#A0522D" },
    { id: 8, name: "Fried Egg", color: "#FFD700" },

    // Cheeses
    { id: 9, name: "American Cheese", color: "#FFD700" },
    { id: 10, name: "Cheddar Cheese", color: "#FFA500" },
    { id: 11, name: "Swiss Cheese", color: "#FFFACD" },
    { id: 12, name: "Pepper Jack", color: "#FFB347" },

    // Vegetables
    { id: 13, name: "Lettuce", color: "#7CFC00" },
    { id: 14, name: "Tomato", color: "#FF6347" },
    { id: 15, name: "Red Onion", color: "#C71585" },
    { id: 16, name: "Pickles", color: "#556B2F" },
    { id: 17, name: "Jalapeños", color: "#228B22" },
    { id: 18, name: "Mushrooms", color: "#8B7355" },
    { id: 19, name: "Avocado", color: "#6B8E23" },

    // Sauces
    { id: 20, name: "Ketchup", color: "#DC143C" },
    { id: 21, name: "Mustard", color: "#FFD700" },
    { id: 22, name: "Mayonnaise", color: "#FFF8DC" },
    { id: 23, name: "BBQ Sauce", color: "#8B0000" },
    { id: 24, name: "Ranch", color: "#F5F5DC" },
    { id: 25, name: "Sriracha", color: "#FF4500" },
  ];
  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (ingredientId) => {
    const index = stack.findIndex((item) => item.id === ingredientId);
    if (index !== -1) {
      const newStack = [...stack];
      newStack.splice(index, 1);
      setStack(newStack);
    }
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section className="burger-app">
        <div className="ingredient-list-container">
          <IngredientList
            ingredients={availableIngredients}
            addToBurger={addToBurger}
          />
        </div>
        <div className="burger-stack-container">
          <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
        </div>
      </section>
    </main>
  );
};

export default App;
