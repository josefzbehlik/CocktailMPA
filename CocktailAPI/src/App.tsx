import { useState } from 'react';
import DataDisplay from './components/DataDisplay';
import SearchBar from './components/SearchBar';
import './App.css';


function App() {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [cocktail, setCocktail] = useState<any>(null);
  

  return (
    <>
      <SearchBar />

      <DataDisplay />
    </>
  );
}

export default App;