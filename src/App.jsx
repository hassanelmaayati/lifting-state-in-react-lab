import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList/IngredientList.jsx';




const App = () => {
  const availableIngredients = [
    { id: 1, name: 'Bun', color: '#D4A373' },
    { id: 2, name: 'Lettuce', color: '#7CFC00' },
    { id: 3, name: 'Tomato', color: '#FF6347' },
    { id: 4, name: 'Cheese', color: '#FFD700' },
    { id: 5, name: 'Patty', color: '#8B4513' },
    { id: 6, name: 'Onion', color: '#FF69B4' }
  ];

  const [stack, setStack] = useState([]);

  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (ingredientId) => {
    const index = stack.findIndex(item => item.id === ingredientId);
    if (index !== -1) {
      const newStack = [...stack];
      newStack.splice(index, 1);
      setStack(newStack);
    }
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList 
          ingredients={availableIngredients} 
          addToBurger={addToBurger}
        />
        <BurgerStack 
          stack={stack} 
          removeFromBurger={removeFromBurger}
        />
      </section>
    </main>
  );
};

export default App;