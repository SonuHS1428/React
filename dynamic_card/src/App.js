import React from 'react';
import Card from './card';

const books = [
  {
    id: 1,
    title: 'The God of Small Things',
    image: 'https://m.media-amazon.com/images/I/91saO95VziL._AC_UF1000,1000_QL80_.jpg',
    author:'~ by Arundhati Roy',
    description: 'This novel explores the intricate lives of twins Estha and Rahel against the backdrop of social, cultural, and political turmoil.',
  },
  {
    id: 2,
    title: "Midnight's Children",
    image: 'https://m.media-amazon.com/images/I/91guqbWJEQL._AC_UF1000,1000_QL80_.jpg',
    author:'~ by Salman Rushdie',
    description: 'A tale of magical realism, this novel follows the lives of children born at the exact moment India gained independence from British rule',
  },
  {
    id: 3,
    title: 'The White Tiger',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPLMmnULQ1HhFa_JiYrXB0unosEfB1CjEkAzQB2rzLw&s',
    author:'~ by Aravind Adiga',
    description: 'Through the eyes of a chauffeur in India, this novel provides a darkly humorous look at class struggle and corruption in modern Indian society.',
  },
  {
    id: 4,
    title: 'Interpreter of Maladies',
    image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/OI/MJ/NW/74279143/xcvb.jpg',
    author:'~ by Jhumpa Lahiri',
    description: 'A collection of short stories that delicately explores the lives of Indian immigrants and their experiences of love,loss and identity in the United States.',
  },
];

const App = () => {
  return (
    <div className="App">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

export default App;