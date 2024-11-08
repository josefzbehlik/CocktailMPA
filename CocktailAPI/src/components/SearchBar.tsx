import React, {FC, useState, useEffect} from "react";

interface SearchBarProps {
    onSearchChange: (search: string) => void;
  }


// The SearchBar component will allow the user to search for a cocktail
const SearchBar: FC<SearchBarProps> = ({onSearchChange}) => {
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        if (search.length >= 4) {
        onSearchChange(search);
      }
    }, [search, onSearchChange]);
    

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearchChange(search);
                    }
                }}
            />
            {loading && <p>Loading...</p>}
            {error && <p>CHYBA: {error}</p>}
        </>
    );
}

export default SearchBar;