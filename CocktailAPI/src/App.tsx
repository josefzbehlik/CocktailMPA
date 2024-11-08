import { useState } from 'react';
import DataDisplay from './components/DataDisplay';
import SearchBar from './components/SearchBar';
import './App.css';


function App() {
  const [search, setSearch] = useState<string>("");


  const handleSearchChange = (newSearch: string) => {
    setSearch(newSearch);
  };

  return (
    <div className="app-container">
      <SearchBar onSearchChange={handleSearchChange}/>

      <DataDisplay search={search}/>
    </div>
  );
}

export default App;