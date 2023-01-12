import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [meals, setMeals] = useState(items);

  const categories = () => {
    const unique = []
    for (const item of items) {
      if (!unique.includes(item.category)) {
        unique.push(item.category);
      }
    }
    return unique
  }

  const filterMeals = (category) => {
    if (category) {
      setMeals(items.filter(item => item.category == category))
    } else {
      console.log('All is clicked')
      setMeals(items)
    }
  }

  return (
    <main>
      <Categories categories={categories} filterMeals={filterMeals} />
      <section className='section-center'>
        {meals.map(meal => <Menu {...meal} />)}
      </section>
    </main>
  )
}

export default App;
