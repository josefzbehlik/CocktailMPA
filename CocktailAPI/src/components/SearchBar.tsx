import React, {FC, useState, useEffect} from "react";

// The SearchBar component will allow the user to search for a cocktail
const SearchBar: FC = () => {
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (search === "") return;

        setLoading(true);
        setError(null);

        fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [search]);

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {loading && <p>Loading...</p>}
            {error && <p>CHYBA: {error}</p>}
        </>
    );
}

export default SearchBar;