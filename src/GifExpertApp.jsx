import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch Man']);

  // Convertimos las categorias actuales en minusculas
  const lowerCaseCategories = categories.map((category) =>
    category.toLowerCase()
  );

  const onAddCategory = (newCategory) => {
    // Verificamos si la 'nuevaCategoria' esta incluida en las categorias actuales
    if (lowerCaseCategories.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpert App</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
