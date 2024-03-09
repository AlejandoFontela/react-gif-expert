import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    // Eliminar refresh
    event.preventDefault();
    // Evaluar que no este vacia y por lo menos coloque 2 caracteres
    if (inputValue.trim().length <= 1) return;
    // Llamamos a la propiedad del componente y le proporcionamos el valor ingresado en el input
    onNewCategory(inputValue.trim());
    // Limpiamos el campo de texto
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} action=''>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
