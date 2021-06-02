import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  }, []);

  return (
    <>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
            gender={result.gender}
            location={result.location.city}
          />
        );
      })}
    </>
  );
};

export default App;
