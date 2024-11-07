import React, { FC, useEffect } from "react";

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setData: (data: any) => void;
}

const SearchBar: FC<SearchBarProps> = ({ search, setSearch, setLoading, setError, setData }) => {
  useEffect(() => {
    if (search === "") return;

    setLoading(true);
    setError(null);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [search, setLoading, setError, setData]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;