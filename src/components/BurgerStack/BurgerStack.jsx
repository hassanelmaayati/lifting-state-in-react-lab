import React from 'react';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.length === 0 ? (
          <li>Your burger is empty. Add some ingredients!</li>
        ) : (
          stack.map((ingredient, index) => (
            <li 
              key={`${ingredient.id}-${index}`} 
              style={{ backgroundColor: ingredient.color }}
            >
              {ingredient.name}
              <button onClick={() => removeFromBurger(ingredient.id)}>
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BurgerStack;