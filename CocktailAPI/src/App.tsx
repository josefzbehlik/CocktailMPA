import { useState } from 'react';
import DataDisplay from './components/DataDisplay';
import SearchBar from './components/SearchBar';
import './App.css';
import { Cocktail } from './types';

function App() {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setLoading={setLoading}
        setError={setError}
        setData={setData}
      />
      <DataDisplay
        loading={loading}
        error={error}
        data={data}
      />
    </>
  );
}

export default App;