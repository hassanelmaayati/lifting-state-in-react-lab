import React from 'react';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li 
            key={ingredient.id} 
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;